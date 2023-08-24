<script>
  import { i18n } from "$lib/stores/i18nStore"

  const current = "Drake"
  const speakers = ["Krysset", "Staffan Björk", "Kakan", "rosen", "HOM BRE"]
  const returning = ["Drei", "Moose", "Piff", "Tee", "Sven"]

  const addme = () => {}
</script>

<div class="grid w-fit grid-cols-[2fr_3fr]">
  <div class="col-span-2">
    {$i18n.speakerslist.currently_speaking}
    <p class="text-[40px] font-bold">{current}</p>
  </div>

  <div>
    {#each speakers as speaker}
      <p>{speaker}</p>
    {/each}
  </div>

  <div class="pl-4 pt-4 font-bold">
    Returning speakers
    {#each returning as speaker}
      <p class="font-normal text-slate-400">{speaker}</p>
    {/each}
  </div>

  <button on:click={addme}>Add me!</button>
</div>
