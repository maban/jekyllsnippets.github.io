---
layout: post
title: Excluding posts by category
author: Kevin
category: snippet
---

To exclude posts by category you can simply skip the category with an empty if statement like shown below:

{% highlight html %}
  {% raw %}
  // looping trough all posts
    {% for post in site.posts limit: 1 %}

    // if the category we want to exclude matches
        {% if post.category == "link" %}
        // we do nothing
        {% else if %}
        // if it's another category, we display the article
        <article>
            <hgroup>
                <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
            </hgroup>
                {{ post.excerpt }}
        </article>
        {% endif %}  
    {% endfor %}
  {% endraw %}
{% endhighlight %}

