---
layout: component-detail
group: components
subgroup: headers-and-footers
image: ../../images/c-footer.png
permalink: /components/headers-and-footers/footers.html

title: Footer
description: Logo and housekeeping links displayed at page bottom


variations:
- title: Default footer
  description: Footer with 2-column links and a logo
  styleModifier: c-footer
  includeClassification: organisms
  includeCategory: 00-global
  includeName: 01-footer

classes:
- className: c-footer
  required: yes
  description: Apply to the wrapper element for the footer. The recommended element for this class is `<footer>`. The class adds padding, color, and border to the footer.
- className: l-container
  recommended: yes
  description: When creating a full-bleed footer that spans the width of the entire viewport, it's recommended to include this [layout container](../layout/layout-container.html) element as a wrapper around all the footer content to limit content display to a sane width on wide screens. This should be the first and only child of `c-footer` and contain all footer content.
- className: c-footer__inner
  required: yes
  description: Apply to the container for all footer content. This class sets up the column layout for the footer.
- className: c-multicolumn-nav
  required: yes
  description: Apply to the list container for the main set of footer links. The recommended element for this class is `<ul>`. The class displays those links in a single column on small screens and two columns in wider viewports. Use additional modifier classes below to change the number or display of these columns.
- className: c-multicolumn-nav--horizontal
  modifier: yes
  description: Add to the `c-multicolumn-nav` element to display wide-viewport footer links in a horizontal list instead of columns. The list will wrap if necessary.
- className: c-multicolumn-nav--three
  modifier: yes
  description: Add to the `c-multicolumn-nav` element to display in three columns on wide viewports instead of two. Medium-width viewports will still display the default two columns.
- className: c-multicolumn-nav__item
  required: yes
  description: Apply to each `<li>` list item inside the `c-multicolumn-nav` list. This class manages the layout and spacing for each navigation item.
- className: c-multicolumn-nav__link
  required: yes
  description: Apply to each `<a>` navigation link. This class controls color and hover behavior.
- className: c-logo
  required: yes
  description: Always add this [logo](../icons-and-media/logo.html) element to the footer, immediately after the `c-multicolumn-nav` element.
- className: c-footer__copyright
  description: Apply this class to the container for copyright and other fine print. If used, add this optional element as the last child of `c-footer__inner`.

---
