<script lang="ts">
  import { navIsOpen, navSelection } from "$lib/stores/navStore"
  import { i18n } from "$lib/stores/i18nStore"
  import sv from "$lib/i18n/sv"
  import en from "$lib/i18n/en"

  const links = [
    { title: "Agenda", href: "./agenda" },
    { title: "Voting", href: "./voting" },
    { title: "Speaker's list", href: "./speakers" },
  ] as const

  function navigate(title: string) {
    $navIsOpen = false
    $navSelection = title
  }
</script>

<ul class="h-full bg-sky-900 text-slate-50">
  {#each links as link}
    <li class="cursor-pointer transition-colors hover:bg-sky-800">
      <a class="block p-4" href={link.href} on:click={() => navigate(link.title)}>{link.title}</a>
    </li>
  {/each}

  <button class="p-4" on:click={() => ($i18n = sv)}>Svenska</button>
  <button class="p-4" on:click={() => ($i18n = en)}>English</button>
</ul>

<!-- Dark mode toggle -->
