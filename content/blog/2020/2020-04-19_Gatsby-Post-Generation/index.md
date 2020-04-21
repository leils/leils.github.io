---
title: Gatsby Post Generation
date: "2020-04-19"
description: Simple bash scripting to generate Gatsby blog posts
tags: ["blog", "code", "Gatsby"]
---

In a classic case of [ignoring XKCD's advice](https://xkcd.com/1205/), I threw together a simple script to generate Gatsby blog posts files. I'm sure other generating scripts exist out there on the internet, but a cursory search didn't return any that fit my needs.

---

One of the hallmarks of a Gatsby blog post is the frontmatter at the top:

```
---
title: Your Title Here
date: "2020-04-19"
description: Basic description about your post
tags: ["tag1", "tag2"]
---
```

While it's not that much boilerplate to write, adding this over and over again
can be annoying. If you make a mistake in your date, your posts will show up
out of order. If you happen to use those dates in your directory hierarchy, you end up copying today's date over and over for each post. My blog content is nested first by year and then by a combination
of date + name, like this:

```
blog
  2020
    2020-04-19_post-title
      index.md
      img.png
```

I wanted this script to:

1. Build the directory structure, including the parent-year directory if it doesn't exist
2. Name the post directory with a combination of today's date and the post title
3. Create an `index.md` markdown file with frontmatter, including the provided title and description
4. Handle inserting today's date wherever necessary

---

## TLDR: Here's the script.

```
#!/bin/sh

#define parameters which are passed in.
TITLE=$1
DESCRIPTION=$2

#generate variables
d=`date +%Y-%m-%d`
y=`date +%Y`
CLEANED_TITLE=${TITLE// /-}
PARENT_DIRNAME="content/blog/${y}"
DIRNAME="${PARENT_DIRNAME}/${d}_${CLEANED_TITLE}"
FILENAME="${DIRNAME}/index.md"

#create year directory if necessary
if [ -d $PARENT_DIRNAME ]
then
    echo "Parent directory $PARENT_DIRNAME exists"
else
    echo "Creating directory $PARENT_DIRNAME"
    mkdir $PARENT_DIRNAME
fi

echo "generating directory: $DIRNAME"
mkdir $DIRNAME

echo "creating $FILENAME"
touch $FILENAME

#define the template.
cat << EOF > $FILENAME
---
title: $TITLE
date: "$d"
description: $DESCRIPTION
tags: []
---
placeholder text
EOF
```

I put this file in `/scripts` in the parent folder of this website, and added the following line to `scripts` in `package.json` to let me call the script through yarn:

```
"generate-post": ". ./scripts/generate-post.sh"
```

You can use this command in the terminal like so:

```
> yarn generate-post "your title" "your description"
```

which will generate the following file as `content > blog > 2020 > 2020-04-19_your-title > index.md`:

```
---
title: your title
date: "2020-04-19"
description: your description
tags: []
---
placeholder text
```

Pretty simple, and I've already spent too much time on it. Feel free to take this script and make it your own. Happy generating!
