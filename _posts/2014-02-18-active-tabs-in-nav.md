---
layout: post
title: Active Tabs in your Nav
author: Jesse
category: snippet
---

When I started using jekyll, I could not figure out how to add classes to the current page's nav item.
Wordpress does this automatically, and makes it easy for the user to know what page (s)he is on.

One way to display an active tab is to compare the current page's url with the nav item's url:

{% highlight html %}
  {% raw %}
  <ul id="nav">
    <li{% if page.url == '/about.html' %} class="active"{% endif %}>
	<a href="/about.html">About</a>
    </li>
    <li{% if page.url == '/news.html' %} class="active"{% endif %}>
	<a href="/news.html">News</a>
    </li>
    <li{% if page.url == '/contact.html' %} class="active"{% endif %}>
	<a href="/contact.html">Careers</a>
    </li>
  </ul>
  {% endraw %}
{% endhighlight %}

Now, you can add styles to the current page's nav item:

{% highlight css %}
  #nav .active{
    border-bottom:2px solid #bada55;
  }
{% endhighlight %}
