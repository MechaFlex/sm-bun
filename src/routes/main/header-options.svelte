<script>
  import { navIsOpen } from "$lib/stores/navStore"

  const links = [
    { title: "Agenda", href: "./agenda" },
    { title: "Voting", href: "./voting" },
    { title: "Speaker's list", href: "./speakers" },
  ]
</script>

<ul class="h-full bg-sky-900 text-slate-50">
  {#each links as link}
    <li class="cursor-pointer transition-colors hover:bg-sky-800">
      <a class="block p-4" href={link.href} on:click={() => ($navIsOpen = false)}>{link.title}</a>
    </li>
  {/each}
</ul>

<!-- Language toggle -->
<!-- Dark mode toggle -->
