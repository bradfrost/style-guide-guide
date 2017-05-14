---
layout: component-detail
group: components
subgroup: headers-and-footers
image: ../../images/c-header--vertical.png
permalink: /components/headers-and-footers/vertical-header.html

title: Vertical header
description: Vertical sidebar navigation on wide screens and hamburger navigation on small screens.


variations:
- title: Default vertical header
  description: |
    On wide screens, the vertical header displays a sidebar-style presentation of site title, navigation, and search form. The navigation displays as [tree navigation](../navigation/tree.html).

    On smaller screens, the header switches to display full width across the top with a mobile-style menu to toggle navigation.
  styleModifier: c-header c-header--vertical
  includeClassification: organisms
  includeCategory: 00-global
  includeName: 00-header-vertical

usage:
- title: When to use
  description: Vertical headers scale to much more complex navigation than horizontal headers. Use a vertical header anytime you have more than six top-level navigation items or more than two levels of navigation depth.
- title: When to consider an alternative
  description: Favor a [horizontal header](horizontal-header.html) when you have less than seven top-level navigation items and no more than two levels of navigation depth.
- title: Search
  description: The vertical header includes a search form, which is displayed inside the hamburger menu on smaller screens, and hidden/revealed by clicking a search button in `c-header__band` element on wider screens. The search form is not required, however; if your application does not include search, remove the search button from `c-header__band` and the search form from `c-header__body`.

classes:
- className: c-header
  required: yes
  description: Apply to the wrapper element for the header. The recommended element for this class is `<header>`. The class adds color and margin to the header. For accessibility, you should also add `role="banner"` to this element.
- className: c-header--vertical
  modifier: yes
  required: yes
  description: Add to `c-header` to display a vertical header instead of the default [horizontal header](../headers-and-footers/horizontal-header.html).
- className: c-header--blue
  modifier: yes
  description: Add to `c-header` to display the header in the blue color theme.
- className: l-container
  required: yes
  description: This [layout container](../layout/layout-container.html) limits the content display of the header to a sane width on wide viewports, while still displaying the header background color full-width.
- className: c-header__inner
  required: yes
  description: Apply to the inner wrapper for the header. The recomended element for this class is `<div>`, and its only children should be `c-header__band` and `c-header__nav-container`.
- className: c-header__band
  required: yes
  description: Apply to the outer container for the header body, and its only child should be `c-header__body`. The class applies background color and padding to the element. The recommended element for this class is `<div>`.
- className: c-header__body
  required: yes
  description: Apply to the container for the application name, hamburger menu button, and optional search button. This is the element that is visible on small viewports when the hamburger menu is closed. On wider screens, it is the strip at the top of the navigation that displays the application name and optional search button. This class sets up the layout for the header. The recomended element for this class is `<div>`.
- className: c-header__title-container
  required: yes
  description: Apply to the outer container for the application name. The recommended element for this class is `<div>`.
- className: c-header__title
  required: yes
  description: Apply to the header title, which displays the application name. The recommended element for this class is `<h2>`.
- className: c-header__title-link
  recommended: yes
  description: Apply to the `<a>` element for the header title. Linking the header title is optional, but recommended for all pages except the application's homepage.
- className: c-header__nav-btn
  required: yes
  description: |
    Apply to the hamburger-menu `<button>` that toggles navigation display on small viewports (this button is hidden on wider viewports). This button should also carry the following [button classes](../buttons/button.html): `c-btn` `c-btn--small` `c-btn--inverted`. See the [button classes](../buttons/button.html) component for complete details of button markup and class names, but note the header-specific classes to use below.
- className: js-nav-trigger
  required: yes
  modifier: yes
  js: yes
  description: Add to the `c-header__nav-btn` element to enable the toggle behavior. On click, Style Guide Guide's JavaScript library changes the button icon and label, and adds/removes `is-active` for the button, `c-header` and `js-nav-panel` elements.
- className: c-btn__icon
  required: yes
  description: Apply to the `<svg>` icon as you normally would for an [icon button](../buttons/button.html), but include two of these [icons](../icons-and-media/icons.html) instead of the usual single icon. The first icon should be the `#icon-menu` hamburger icon, and the second should be the `#icon-x` "close" icon. Include the following modifier classes to allow the button to properly toggle between states.
- className: js-btn-icon
  js: yes
  modifier: yes
  description: Add to the first (`#icon-menu`) icon in hamburger-menu button.
- className: js-btn-swap-icon
  js: yes
  modifier: yes
  description: Add to the second (`#icon-x`) icon in hamburger-menu button.
- className: u-is-hidden
  modifier: yes
  description: Add to the second (`#icon-x`) icon in hamburger-menu button to make it hidden by default.
- className: js-header-search-trigger
  js: yes
  description: Add to the `c-btn` button element for the search icon that toggles display of the optional search form. The recommended element for this class is `<button>`, and it should immediately follow the hamburger-menu button in the markup. (See the [button component](../buttons/button.html) for details about displaying an icon-only button.) Follow the same double-icon approach as the hamburger menu (see `c-btn` above) but use the `#icon-search` and `#icon-x` as the two icons.
- className: c-header__nav-container
  required: yes
  description: Apply to the wrapper for all navigation. This is the parent element of the search form and primary navigation. The recommended element for this class is `<div>`. The class controls position, padding, and background color for these navigation elements.
- className: js-nav-panel
  js: yes
  modifier: yes
  required: yes
  description: Add to the `c-header__nav-container` to enable toggled display of the navigation via the hamburger menu on small viewports.
- className: c-search-form
  description: Apply to the optional [search form](../form-controls/search.html). When you include search in the header, this should be the first child of the `c-header__nav-container` element. For accessibility, be sure to add the `role=search` attribute to the `<form>` element, too. See the [search component](../form-controls/search.html) for complete markup and class details.
- className: js-header-search
  modifier: yes
  js: yes
  description: Add to the `c-search-form` element. This helps Style Guide Guide's JavaScript library to toggle the display of the search form on smaller viewports.
- className: c-tree
  required: yes
  description: Apply to the container for the application's primary navigation. See [tree navigation](../navigation/tree.html) for complete details about the markup and styles for this component.

---
