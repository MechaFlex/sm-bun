<script>
  const current = "Drake"
  const speakers = ["Krysset", "Staffan Björk", "Kakan", "rosen", "HOM BRE"]
  const returning = ["Drei", "Moose", "Piff", "Tee", "Sven"]
</script>

<div class="grid w-fit grid-cols-[2fr_3fr]">
  <div class="col-span-2">
    Currently speaking
    <p class="text-[40px] font-bold">{current}</p>
  </div>

  <div>
    {#each speakers as speaker}
      <p>{speaker}</p>
    {/each}
  </div>

  <div class="p-4 font-bold">
    Returning speakers
    {#each returning as speaker}
      <p class="font-normal text-slate-400">{speaker}</p>
    {/each}
  </div>
</div>
