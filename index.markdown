<meta charset="utf-8" emacsmode="-*- markdown -*-">

# [About](about)


{% if site.paginate %}
    {% assign posts = paginator.posts %}
  {% else %}
    {% assign posts = site.posts %}
  {% endif %}


  {%- if posts.size > 0 -%}
    {%- if page.list_title -%}
      {{ page.list_title }}
    {%- endif -%}
    <ul>
      {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
      {%- for post in posts -%}
      <li>
        <span>{{ post.date | date: date_format }}</span>
          <a href="{{ post.url | relative_url }}">
            {{ post.title | escape }}
          </a>
        {%- if site.show_excerpts -%}
          {{ post.excerpt }}
        {%- endif -%}
      </li>
      {%- endfor -%}
    </ul>

    {% if site.paginate %}
      <div >
        <ul >
        {%- if paginator.previous_page %}
          <li><a href="{{ paginator.previous_page_path | relative_url }}">{{ paginator.previous_page }}</a></li>
        {%- else %}
          <li><div>•</div></li>
        {%- endif %}
          <li><div>{{ paginator.page }}</div></li>
        {%- if paginator.next_page %}
          <li><a href="{{ paginator.next_page_path | relative_url }}">{{ paginator.next_page }}</a></li>
        {%- else %}
          <li><div>•</div></li>
        {%- endif %}
        </ul>
      </div>
    {%- endif %}

  {%- endif -%}

# asd

<script src="https://morgan3d.github.io/markdeep/latest/markdeep.min.js?" charset="utf-8"></script>
