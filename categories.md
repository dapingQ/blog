---
layout: default
---
<div class="title"> Categories </div>

<div>
{%- for cat in site.categories -%}
  <h1>{{ cat[0] }}</h1>
  <ul>
    {%- for post in cat[1] -%}
      <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
    {%- endfor -%}
  </ul>
{%- endfor -%}
</div>


<script>markdeepOptions={tocStyle:'none'};</script>
<style>.md h1:before, .md h2:before { content: none }</style>
