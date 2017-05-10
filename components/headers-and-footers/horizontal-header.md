---
layout: component-detail
group: components
subgroup: headers-and-footers
image: ../../images/c-header.png
permalink: /components/headers-and-footers/horizontal-header.html

title: Horizontal header
description: Displays a full-width header on wide screens and a hamburger menu on small screens.


variations:
- title: Default header
  description: Suited to four or fewer menu items, depending on item length. Includes site title and navigation.
  styleModifier: c-header
  includeClassification: organisms
  includeCategory: 00-global
  includeName: 00-header

usage:
- title: When to use
  description: |
    - Four or less navigation items? Use default header.
    - Five or less with a compact header? Use condensed header.
    - Five or six navigation items? Use header with more links.
- title: When to consider an alternative
  description: Use a [vertical header](vertical-header.html) when you have more than six navigation items, or when you want to display more than two levels of navigation. (The horizontal header supports top-level navigation, and one level of subnavigation in dropdown menus.)
- title: Menu size
  description: The horizontal header is responsive, and the navigation shifts according to screen size. However, if you overload the header with too many links, the links will wrap awkwardly. The "when to use" rules above are general guidelines that will vary according to the length of navigation labels. Check your navigation to make sure it fits; under no circumstances should you allow navigation links to wrap to two lines. If that happens, switch to a different header style.
- title: Global navigation
  description: |
    The horizontal header supports an optional "global navigation menu," which appears as a secondary, supporting navigation. Use this global navigation to display links to related applications or websites—other applications from the same department, for example. If you display an account-profile link/menu in the header, the global navigation is where it should appear (always right-aligned on wide viewports).  On wide screens, this menu is displayed as a thin strip at the top of the header. On smaller viewports, it appears at the bottom of the hamburger menu. Like the application's primary navigation, the global navigation can support two levels of navigation: top-level items plus optional subnavigation in dropdown menus.
- title: Search
  description: The horizontal header supports an optional search form, which is hidden/revealed by clicking a search button in the primary navigation menu. See the "Header with search" tab on this page for an example.

classes:
- className: c-header
  required: yes
  description: Apply to the wrapper element for the header. The recommended element for this class is `<header>`. The class adds color and margin to the header. For accessibility, you should also add `role="banner"` to this element.
- className: c-header--condensed
  modifier: yes
  description: Add to `c-header` to display a vertically compact header. Font size, padding, and height are compressed, with navigation displayed on the same line as the application title. (Cannot be combined with `c-header--large-nav`.)
- className: c-header--large-nav
  modifier: yes
  description: Add to `c-header` when displaying more than four top-level navigation items in primary navigation. This class shifts the navigation menu below the application title, even at the widest viewports. (The default `c-header` behavior instead displays navigation to the right of the application title at wide viewports.)
- className: c-header--vertical
  modifier: yes
  description: Add to `c-header` to switch to a [vertical header](../headers-and-footers/vertical-header.html) instead of a horizontal header.
- className: c-header--blue
  modifier: yes
  description: Add to `c-header` to display the header in the blue color theme.
- className: l-container
  required: yes
  description: This [layout container](../layout/layout-container.html) limits the content display of the header to a sane width on wide viewports, while still displaying the header background color full-width.
- className: c-header__inner
  required: yes
  description: Apply to the inner wrapper for the header. The recomended element for this class is `<div>`, and its only child should be `c-header__body`.
- className: c-header__body
  required: yes
  description: Apply to the container for all header content. This class sets up the layout for the header. The recomended element for this class is `<div>`.
- className: c-header__title-container
  required: yes
  description: Apply to the outer container for the header title and optional kicker. This class handles the alignment and spacing of the header relative to primary navigation. The recommended element for this class is `<div>`.
- className: c-header__kicker
  description: Apply to the optional kicker element, which displays a small all-caps label above the title. The recommended element for this class is `<h4>`.
- className: c-header__title
  required: yes
  description: Apply to the header title, which displays the application name. The recommended element for this class is `<h2>`.
- className: c-header__title-link
  recommended: yes
  description: Apply to the `<a>` element for the header title. Linking the header title is optional, but recommended for all pages except the application's homepage.
- className: c-header__nav-btn
  required: yes
  description: |
    Apply to the hamburger-menu `<button>` that toggles navigation display on small viewports. This button should also carry the following [button classes](../buttons/button.html): `c-btn` `c-btn--small` `c-btn--inverted`. See the [button classes](../buttons/button.html) component for complete details of button markup and class names, but note the header-specific classes to use below.
- className: js-nav-trigger
  required: yes
  modifier: yes
  js: yes
  description: Add to the `c-header__nav-btn` element to enable the toggle behavior. On click, Agora's JavaScript library changes the button icon and label, and adds/removes `is-active` for the button, `c-header` and `js-nav-panel` elements.
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
- className: c-header__nav-container
  required: yes
  description: Apply to the wrapper for all navigation. This is the parent element of the search form, primary navigation, and global navigation. The recommended element for this class is `<div>`. The class controls position, padding, and background color for these navigation elements.
- className: js-nav-panel
  js: yes
  modifier: yes
  required: yes
  description: Add to the `c-header__nav-container` to enable toggled display of the navigation via the hamburger menu on small viewports.
- className: c-search-form
  description: Apply to the optional [search form](../form-controls/search.html). When you include search in the header, this should be the first child of the `c-header__nav-container` element. For accessibility, be sure to add the `role=search` attribute to the `<form>` element, too. See the [search component](../form-controls/search.html) for complete markup and class details.
- className: js-header-search
  modifier: yes
  description: Add to the `c-search-form` element. This helps Agora's JavaScript library to toggle the display of the search form on smaller viewports.
- className: c-primary-nav
  required: yes
  description: Apply to the container for the application's primary navigation. The recommended element for this class is `<nav>`. The class controls the margin and high-level layout around the menu. The only child of this element should be the `<ul>` list of menu items.
- className: c-primary-nav__list
  required: yes
  description: Apply to the `<ul>` list of the application's primary navigation menu items.
- className: c-primary-nav__item
  required: yes
  description: Apply to each `<li>` menu item in the application's primary navigation menu. The children of this element are the item's `c-primary-nav__link` link and, if applicable, a `c-primary-nav__sublist` list for the item's subnavigation. (The only exception is the search button, which is displayed as a `<button>` inside the `c-primary-nav__item` element. See `js-header-search-trigger` below.)
- className: c-primary-nav__item--search-trigger
  modifier: yes
  description: Add to the `c-primary-nav__item` element if the navigation item is intended to toggle the display of the search button (e.g. a search-button icon on small viewports). In that case, the recommended child of `c-primary-nav__item` is a `<button>` instead of the typical `c-primary-nav__link` link element. See `js-header-search-trigger` below.
- className: c-primary-nav__link
  required: yes
  description: Apply to the `<a>` link for each item in the application's primary navigation menu. This class handles the menu's font treatment and color.
- className: is-current
  modifier: yes
  description: Add to the `c-primary-nav__link` element for the currently active navigation section, if any.
- className: c-primary-nav__link--has-children
  modifier: yes
  description: Add to the `c-primary-nav__link` element for any navigation section that has its own subnavigation menu. (Also add the `js-nav-dropdown-trigger` class to the link and insert an `#icon-caret-down` icon after the link text.) This class is required if you include a subnavigation menu for the item.
- className: js-nav-dropdown-trigger
  modifier: yes
  javascript: yes
  description: Add to the `c-primary-nav__link` element for any navigation section that has its own subnavigation menu. Agora's JavaScript library uses this class to help hide/display the subnavigation menu on click. This class is required if you include a subnavigation menu for the item.
- className: c-primary-nav__icon
  description: Apply to the optional `c-icon` [icon](../icons-and-media/icons.html) to include inside `c-primary-nav__link` for any primary navigation item with subnavigation. Use this to display a down-arrow icon (the `#icon-caret-down` icon variation) to indicate that a dropdown menu is available. See the [icon component](../icons-and-media/icons.html) for complete details.
- className: c-badge
  description: Apply to an optional badge element displayed alongside a navigation item's name. The recommended element for this class is `<span>` and it is typically used to display a numeric count (e.g. a badge might display "11" after a "Notifications" menu item when indicating that there are 11 new notifications.) This element should go inside `c-primary-nav__link`, immediately after the name of the menu item.
- className: js-header-search-trigger
  js: yes
  description: Add to the `c-btn` button element of a search icon that toggles display of the optional search form when including search in the header. The recommended element for this class is `<button>`, and it typically uses the `c-btn--bare` modifier to display only the `#icon-search` icon. (See the [button component](../buttons/button.html) for details about displaying an icon-only button.) This button element replaces the typical `c-primary-nav__link` link element for a navigation item.
- className: c-primary-nav__sublist
  description: Apply to the optional `<ul>` list for a subnavigation menu. Agora's horizontal header supports two levels of navigation (primary navigation and subnavigation), so you may nest `c-primary-nav__sublist` elements inside `c-primary-nav__item` list elements only. Add this `<ul>` immediately after the navigation item's `c-primary-nav__link` link element. This class is required if you include a subnavigation menu.
- className: js-nav-dropdown
  modifier: yes
  js: yes
  description: Add to all `c-primary-nav__sublist` elements. This class help' Agora's JavaScript library to hide/display the subnavigation menu. This class is required if you include a subnavigation menu.
- className: c-primary-nav__subitem
  description: Apply to each `<li>` menu item in a subnavigation menu. The only child of this element should be the item's `c-primary-nav__sublink` link. This class is required if you include a subnavigation menu.
- className: c-primary-nav__sublink
  description: Apply to the `<a>` link for each item in a subnavigation menu.
- className: c-global-nav
  description: |
    Apply to the container for the application's optional global navigation. Global navigation is a secondary menu for displaying "meta navigation": external links to related applications/websites or to account/profile information. The recommended element for this class is `<nav>`. Although this nav menu displays at the top of the header, the recommended placement for the element markup is actually at the bottom: insert the `c-global-nav__list` element immediately after the `c-primary-nav` navigation element, inside `c-header__nav-container`.
- className: c-global-nav__list
  description: Apply to the `<ul>` list of the application's optional global navigation menu.
- className: c-global-nav__item
  description: Apply to each `<li>` menu item in the application's optional global navigation menu. The children of this element are the item's `c-global-nav__link` link and, if applicable, a `c-global-nav__sublist` list for the item's subnavigation.
- className: is-aligned-right
  modifier: yes
  description: Add to no more than one `c-global-nav__item` to shift the menu item to the right side of the menu on wide viewports. This is recommended when displaying an account-profile link/menu in global navigation.
- className: c-global-nav__link
  description: Apply to the `<a>` link for each item in the application's optional global navigation menu. This class handles the menu's font treatment and color.
- className: c-global-nav__link
  description: Apply to the `<a>` link for each item in the application's optional global navigation menu. This class handles the menu's font treatment and color.
- className: c-global-nav__link--has-children
  modifier: yes
  description: Add to the `c-global-nav__link` element for any global-navigation item that has a subnavigation menu. (Also add the `js-nav-dropdown-trigger` class to the link and insert an `#icon-caret-down` icon after the link text.) This class is required if you include a subnavigation menu for the item.
- className: js-nav-dropdown-trigger
  modifier: yes
  javascript: yes
  description: Add to the `c-global-nav__link` element for any global-navigation item that has a subnavigation menu. Agora's JavaScript library uses this class to help hide/display the subnavigation menu on click. This class is required if you include a subnavigation menu for the item.
- className: c-global-nav__icon
  description: Apply to the optional `c-icon` [icon](../icons-and-media/icons.html) to include inside `c-global-nav__link` for any global-navigation item with subnavigation. Use this to display a down-arrow icon (the `#icon-caret-down` icon variation) to indicate that a dropdown menu is available. See the [icon component](../icons-and-media/icons.html) for complete details.
- className: c-global-nav__sublist
  description: Apply to the optional `<ul>` list of a subnavigation menu within global navigation. Add this `<ul>` immediately after the navigation item's `c-primary-nav__link` link element. This class is required if you include a subnavigation menu inside a global-navigation item.
- className: js-nav-dropdown
  modifier: yes
  js: yes
  description: Add to all `c-global-nav__sublist` elements. This class help' Agora's JavaScript library to hide/display the subnavigation menu. This class is required if you include a subnavigation menu.
- className: c-global-nav__subitem
  description: Apply to each `<li>` menu item in a global-nav subnavigation menu. The only child of this element should be the item's `c-global-nav__sublink` link. This class is required if you include a subnavigation menu inside a global-navigation item.
- className: c-global-nav__sublink
  description: Apply to the `<a>` link for each item in a global-nav subnavigation menu.

---
