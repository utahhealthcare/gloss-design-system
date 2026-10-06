---
title: Gloss Design System
description: University of Utah Health's design system for clinical and academic digital experiences.
---

# Gloss Design System

<p class="gls-text-lead">
    Gloss is the University of Utah Health design system for clinical and academic
    digital experiences.
</p>

## Components

<ul class="gls-list gls-list-divider">
    {% for component in site.data.components %}
        {% assign component_path = component.slug | prepend: '/' | append: '/' %}
        <li><a href="{{ component_path | relative_url }}">{{ component.title }}</a></li>
    {% endfor %}
</ul>
