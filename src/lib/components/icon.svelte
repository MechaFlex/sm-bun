<!-- Icon component based on HeroIcons -->
<script>
  /** @type {string} */
  export let path

  /** @type {number} */
  export let strokeWidth = 1.5
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width={strokeWidth}
  stroke="currentColor"
  class="h-6 w-6"
>
  <path stroke-linecap="round" stroke-linejoin="round" d={path} />
</svg>
