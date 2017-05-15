---
layout: component-detail
group: components
subgroup: blocks-and-cards
permalink: /components/blocks-and-cards/hero.html

title: Hero
description: Large-format unit to promote content with a high-impact image


variations:
- title: Default hero
  description: Default hero that has no gradient overlay
  styleModifier: c-hero
  includeClassification: molecules
  includeCategory: 02-blocks
  includeName: hero
- title: Blue tint hero
  description: Hero with a blue gradient overlay
  styleModifier: c-hero c-hero--blue-tint
  includeClassification: molecules
  includeCategory: 02-blocks
  includeName: hero-blue-tint
- title: Red tinted hero
  description: Hero with a red gradient overlay
  styleModifier: c-hero c-hero--red-tint
  includeClassification: molecules
  includeCategory: 02-blocks
  includeName: hero-red-tint

usage:
- title: When to use
  description: Usage description.
- title: When to consider an alternative
  description: Alternative usage.

classes:
- className: c-hero
  required : yes
  description: Apply to the hero block's containing HTML element. This class sets up the background-image handling and text color for the unit. The `c-hero` element should have just one immediate child, the `c-hero__body` element. Note, too, that the unit's hero image should be applied as a background image to this `c-hero` element.
- className: c-hero--bare
  modifier : yes
  description: Add to the `c-hero` element to remove the default gradient overlay from the hero image.
- className: c-hero--tinted
  modifier : yes
  description: Add to the `c-hero` element to replace the default gradient overlay with a solid, uniform tint.
- className: c-hero__body
  required: yes
  description: Apply to the container for the card body, which typically includes a title and description (see below) but can include any arbitrary markup including buttons for a call to action. The class manages the card's background gradient.
- className: c-hero__title
  recommended: yes
  description: Apply to the card's heading inside the card body. The recommended element for this class is `<h1>`.
- className: c-hero__desc
  recommended: yes
  description: Apply to the card's description text inside the card body. The recommended element for this class is `<p>`.

---
