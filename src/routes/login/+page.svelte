<script>
  import Icon from "$lib/components/icon.svelte"
  import dayjs from "dayjs"
  import "dayjs/locale/sv"
  import advancedFormat from "dayjs/plugin/advancedFormat"

  const meetingIsActive = true
  const nextMeetingName = "Student Division Meeting LP1"

  //dayjs.locale("sv")
  dayjs.extend(advancedFormat)
  const nextMeetingDate = dayjs("2023-10-06T17:30:00")
</script>

<main class="flex h-screen flex-col items-center justify-center gap-8 px-36 text-center">
  <div>
    <div class="h-[0.9em] font-logo text-[120px] leading-[1em]">SM</div>
    <div>sm.chalmers.it</div>
  </div>

  {#if meetingIsActive}
    <p>{nextMeetingName} is currently in session</p>

    <form action="" class="flex gap-2">
      <input type="text" placeholder="Your name" class="text-center" />
      <button type="submit" title="Continue">
        <Icon strokeWidth={3} path="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </button>
    </form>
  {:else}
    <p>No division meeting is currently in session.</p>
    {#if nextMeetingDate}
      <p>
        The next meeting is on {nextMeetingDate.format("MMMM Do")} at {nextMeetingDate.format(
          "H:mm"
        )}
      </p>
    {/if}
  {/if}
</main>
