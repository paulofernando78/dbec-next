<script setup>

const drop = [
  {
    beforeOptions: "1.",
    options: [
      { id: "1", label: "at" },
      { id: "2", label: "on" },
      { id: "3", label: "in" },
    ],
    correctAnswer: "2",
    afterOptions: "June 6 (sixth)",
    lineBreak: true,
  },
  {
    beforeOptions: "2.",
    options: [
      { id: "1", label: "at" },
      { id: "2", label: "on" },
      { id: "3", label: "in" },
    ],
    correctAnswer: "3",
    afterOptions: "the evening",
    lineBreak: true,
  },
  {
    beforeOptions: "3.",
    options: [
      { id: "1", label: "at" },
      { id: "2", label: "on" },
      { id: "3", label: "in" },
    ],
    correctAnswer: "1",
    afterOptions: "2:30",
    lineBreak: true,
  },
  {
    beforeOptions: "4.",
    options: [
      { id: "1", label: "at" },
      { id: "2", label: "on" },
      { id: "3", label: "in" },
    ],
    correctAnswer: "2",
    afterOptions: "Wednesday",
    lineBreak: true,
  },
  {
    beforeOptions: "5.",
    options: [
      { id: "1", label: "at" },
      { id: "2", label: "on" },
      { id: "3", label: "in" },
    ],
    correctAnswer: "3",
    afterOptions: "2007",
    lineBreak: true,
  },
  {
    beforeOptions: "6.",
    options: [
      { id: "1", label: "at" },
      { id: "2", label: "on" },
      { id: "3", label: "in" },
    ],
    correctAnswer: "3",
    afterOptions: "September",
    lineBreak: true,
  },
  {
    beforeOptions: "7.",
    options: [
      { id: "1", label: "at" },
      { id: "2", label: "on" },
      { id: "3", label: "in" },
    ],
    correctAnswer: "2",
    afterOptions: "September 24 (twenty-fourth)",
    lineBreak: true,
  },
  {
    beforeOptions: "8.",
    options: [
      { id: "1", label: "at" },
      { id: "2", label: "on" },
      { id: "3", label: "in" },
    ],
    correctAnswer: "2",
    afterOptions: "Thursday",
    lineBreak: true,
  },
  {
    beforeOptions: "9.",
    options: [
      { id: "1", label: "at" },
      { id: "2", label: "on" },
      { id: "3", label: "in" },
    ],
    correctAnswer: "1",
    afterOptions: "11:45",
    lineBreak: true,
  },
  {
    beforeOptions: "10.",
    options: [
      { id: "1", label: "at" },
      { id: "2", label: "on" },
      { id: "3", label: "in" },
    ],
    correctAnswer: "2",
    afterOptions: "Christmas Day",
    lineBreak: true,
  },
  {
    beforeOptions: "11.",
    options: [
      { id: "1", label: "at" },
      { id: "2", label: "on" },
      { id: "3", label: "in" },
    ],
    correctAnswer: "1",
    afterOptions: "Christmas",
    lineBreak: true,
  },
  {
    beforeOptions: "12.",
    options: [
      { id: "1", label: "at" },
      { id: "2", label: "on" },
      { id: "3", label: "in" },
    ],
    correctAnswer: "3",
    afterOptions: "the morning",
    lineBreak: true,
  },
  {
    beforeOptions: "13.",
    options: [
      { id: "1", label: "at" },
      { id: "2", label: "on" },
      { id: "3", label: "in" },
    ],
    correctAnswer: "2",
    afterOptions: "Friday morning",
    lineBreak: true,
  },
  {
    beforeOptions: "14.",
    options: [
      { id: "1", label: "at" },
      { id: "2", label: "on" },
      { id: "3", label: "in" },
    ],
    correctAnswer: "2",
    afterOptions: "Saturday night",
    lineBreak: true,
  },
  {
    beforeOptions: "15.",
    options: [
      { id: "1", label: "at" },
      { id: "2", label: "on" },
      { id: "3", label: "in" },
    ],
    correctAnswer: "1",
    afterOptions: "night",
    lineBreak: true,
  },
  {
    beforeOptions: "16.",
    options: [
      { id: "1", label: "at" },
      { id: "2", label: "on" },
      { id: "3", label: "in" },
    ],
    correctAnswer: "1",
    afterOptions: "the end of the day",
    lineBreak: true,
  },
  {
    beforeOptions: "17.",
    options: [
      { id: "1", label: "at" },
      { id: "2", label: "on" },
      { id: "3", label: "in" },
    ],
    correctAnswer: "2",
    afterOptions: "the weekend (USA)",
    lineBreak: true,
  },
  {
    beforeOptions: "18.",
    options: [
      { id: "1", label: "at" },
      { id: "2", label: "on" },
      { id: "3", label: "in" },
    ],
    correctAnswer: "3",
    afterOptions: "winter",
    lineBreak: true,
  },
]

</script>

<template>
  <Whiteboard
    title="Extras"
    subtitle="Grammar"
    :descriptions="['Elementary', 'Unit 103 • at, on, in']"
  />
  <div class="line-break">
    <!-- A -->
    <CardDescription :bgColor="'bg-red-500'" :textColor="'text-white'">
      <template #label>
        <span>A</span>
      </template>
      <template #content>
        <!-- AT -->
        <div class="space-y-5 mb-4">
          <Card class="bg-gray-300 text-black my-2">
            <p><b>at</b></p>
          </Card>
          <div class="a-containers">
            <div>
              <img
                src="/img/bitmoji/clock-wakeup-hate.png"
                alt="Clock"
                class="img-100-border w-56"
              />
            </div>
            <div>
              <p><b>at</b> 8 o'clock</p>
              <p class="space-x-2">
                <img
                  src="/img/icon/flag/usa.png"
                  alt="USA flag"
                  class="icon-general inline"
                />
                <b>at</b> 10:30
              </p>
              <p class="space-x-2">
                <img
                  src="/img/icon/flag/uk.png"
                  alt="USA flag"
                  class="icon-general inline"
                />
                <b>at</b> 10.30
              </p>
              <p><b>at</b> midnight</p>
              <p>etc.</p>
              <p></p>
            </div>

            <div>
              <p><b>•</b> I wake up <b>at</b> 5:30.</p>
              <p><b>•</b> I start work <b>at</b> 8:00.</p>
              <p><b>•</b> The banks open <b>at</b> 10:00.</p>
              <p>
                <b>•</b> The museum close<span class="color-green">s</span>
                <b> at</b> 5:30.
              </p>
            </div>
          </div>
        </div>
        <!-- ON -->
        <div class="space-y-5 mb-4">
          <Card class="bg-gray-300 text-black">
            <p><b>on</b></p>
          </Card>
          <div>
            <div class="a-containers">
              <div>
                <img
                  src="/img/bitmoji/xmas1.png"
                  alt="Xmas"
                  class="img-100-border w-56"
                />
              </div>

              <div class="line-break">
                <div>
                  <p>
                    <u><b>Days of week / weekend</b></u>
                  </p>
                  <p><b>on</b> Sunday(s) / Monday(s), etc.</p>
                  <p class="space-x-2">
                    <img
                      src="/img/icon/flag/usa.png"
                      alt="UK flag"
                      class="icon-general inline"
                    />
                    <b>on</b>
                    the weekend / weekends
                  </p>
                  <p class="space-x-2">
                    <img
                      src="/img/icon/flag/uk.png"
                      alt="USA flag"
                      class="icon-general inline"
                    />
                    <b>at</b> the weekend / weekends
                  </p>
                </div>
                <div class="line-break">
                  <div>
                    <p>
                      <u><b>Months + Dates</b></u>
                    </p>
                    <p><b>on</b> April 25 / June 6, etc.</p>
                  </div>

                  <div>
                    <p>
                      <b><u>Events</u></b>
                    </p>
                    <p><b>on</b> Christmas Day</p>
                    <p><b>on</b> New Year's Day</p>
                  </div>
                </div>
              </div>

              <div>
                <p><b>•</b> Bye! I'll see you <b>on</b> Friday.</p>
                <p><b>•</b> What do you usually do <b>on</b> Sundays?</p>
                <p class="space-x-2">
                  <b>•</b>
                  <img
                    src="/img/icon/flag/usa.png"
                    alt="UK flag"
                    class="icon-general inline"
                  />
                  The concert is <b>on</b> November 22.
                </p>
                <p class="space-x-2">
                  <b>•</b>
                  <img
                    src="/img/icon/flag/uk.png"
                    alt="UK flag"
                    class="icon-general inline"
                  />
                  The concert is <b>on</b> (the) 22 (of) November.
                </p>
                <p class="mt-4">
                  <img
                    src="/img/icon/warning.png"
                    alt="Icon warning"
                    class="icon-general inline"
                  />
                  Use ordinal numbers for dates.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- IN -->
        <div class="space-y-5 mb-4">
          <Card class="bg-gray-300 text-black">
            <p><b>in</b></p>
          </Card>
          <div>
            <div class="a-containers">
              <div>
                <img
                  src="/img/bitmoji/small-swimming-pool.png"
                  alt="pic1"
                  class="img-100-border w-56"
                />
              </div>

              <div class="line-break">
                <div>
                  <p>
                    <b><u>Months</u></b>
                  </p>
                  <p><b>in</b> April / June, etc.</p>
                </div>

                <div>
                  <p>
                    <b><u>Years</u></b>
                  </p>
                  <p><b>in</b> 1998 / 2013, etc.</p>
                </div>

                <div>
                  <p>
                    <b><u>Seasons</u></b>
                  </p>
                  <p><b>in</b> summer / spring, etc.</p>
                </div>
              </div>
              <div>
                <p><b>•</b> I'm going on vacation <b>in</b> October.</p>
                <p><b>•</b> Emma was born <b>in</b> 1995.</p>
                <p><b>•</b> The park is beautiful <b>in</b> spring.</p>
                <p class="space-x-2 mt-4">
                  <img
                    src="/img/icon/warning.png"
                    alt="Icon warning"
                    class="icon-general inline"
                  />
                  <b>in</b> <mark>the</mark> spring of 1967... (specific)
                </p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </CardDescription>

    <!-- B -->
    <CardDescription :bgColor="'bg-red-500'" :textColor="'text-white'">
      <template #label>
        <p>B</p>
      </template>
      <template #content>
        <p>We say:</p>

        <div class="flex flex-col gap-5 lg:grid grid-cols-2 mb-4">
          <div>
            <p><b>at</b> night</p>
            <p><b>at</b> the end of day / month / year</p>
            <p><b>at</b> the moment</p>
            <p><b>at</b> Christmas</p>
          </div>

          <div>
            <p><b>•</b> I can't sleep <b>at</b> night.</p>
            <p><b>•</b> Where will you be <b>at</b> Christmas?</p>
            <p><b>•</b> I'm going on vacation <b>at</b> the end of October.</p>
            <p><b>•</b> Are you busy <b>at</b> the moment?</p>
            <p><b>•</b> Are you coming <b>on</b> / <b>at</b> the weekend?</p>
          </div>
        </div>

        <div>
          <div>
            <p class="space-x-2">
              <i
                ><img
                  src="/img/icon/warning.png"
                  alt="Icon warning"
                  class="icon-general inline"
                />
                exceptions</i
              >
            </p>
            <p>
              <b><u>on</u></b> Christmas <u>Day</u>
            </p>
          </div>

          <p>
            <b>in the night</b>
            <span class="portuguese">
              enfatiza a idéia de ser tarde, escuro e as pessoas estarem
              dormindo (na noite).
            </span>
          </p>

          <p>
            <b>at night</b>
            <span class="portuguese">
              se refere ao fato de não mais ser dia como um todo, de uma forma
              geral (de/à noite).</span
            >
            <span>
              • I heard an owl hooting in the night.<span class="portuguese">
                Eu ouvi um pio de coruja no meio da noite.</span
              >
            </span>
          </p>
          <p>
            <span
              ><b>in</b> the end
              <span class="portuguese">no fim das contas; finalmente </span>
            </span>
          </p>
        </div>
      </template>
    </CardDescription>

    <!-- C -->
    <CardDescription :bgColor="'bg-red-500'" :textColor="'text-white'">
      <template #label>
        <p>C</p>
      </template>
      <template #content>
        <div class="space-y-5">
          <p><b>in the morning / in the afternoon / in the evening</b></p>
          <div>
            <p><b>•</b> I always feel good in the morning.</p>
            <p><b>•</b> Do you often go out in the evening?</p>
          </div>
          <div>
            <p><i>but</i></p>
            <p>
              <b
                >on Monday morning / on Tuesday afternoon / on Friday evening /
                on Saturday night, etc.</b
              >
            </p>
          </div>
          <div>
            <p><b>•</b> I'm meeting Jackei on Monday morning.</p>
            <p><b>•</b> Are you doing anything on Saturday night?</p>
          </div>
        </div>
      </template>
    </CardDescription>

    <!-- D -->
    <CardDescription :bgColor="'bg-red-500'" :textColor="'text-white'">
      <template #label>
        <p>D</p>
      </template>
      <template #content>
        <div class="space-y-5">
          <p>We don't use <b>at</b>/<b>on</b>/<b>in</b> before:</p>

          <div class="flex flex-col gap-5 lg:grid grid-cols-2">
            <div>
              <p>
                <b>this</b> ... (<b>this</b> morning / <b>this</b> week, etc.)
              </p>
              <p>
                <b>last</b> ... (<b>last</b> August / <b>last</b> week, etc.)
              </p>
              <p>
                <b>next</b> ... (<b>next</b> Monday / <b>next</b> week, etc.)
              </p>
              <p>
                <b>every</b> ... (<b>every</b> day / <b>every</b> week, etc.)
              </p>
            </div>
            <div>
              <p><b>•</b> Are you going out <b>this evening?</b></p>
              <p>
                <b>•</b> We go on vacation <b>every summer</b>.
                <b>Last summer</b> we went to Canada.
              </p>
              <p><b>•</b> I'm leaving <b>next Monday</b>.</p>
            </div>
          </div>
          <p>
            <img
              src="/img/icon/warning.png"
              alt="Icon warning"
              class="icon-general inline"
            />
            Continue <mark>on the</mark> next page
          </p>
        </div>
      </template>
    </CardDescription>

    <!-- E -->
    <CardDescription :bgColor="'bg-red-500'" :textColor="'text-white'">
      <template #label>
        <p>E</p>
      </template>
      <template #content>
        <div class="space-y-5">
          <div>
            <p>
              <b>in five minutes</b> / <b>in a few days</b> /
              <b>in six weeks</b> / <b>in two years,</b> etc.
            </p>
          </div>

          <img
            src="/img/extras/grammar/elementary/unit-103/in-five-minutes.png"
            alt="In five minutes"
            class="img-100-border w-[70%] sm:w-[300px]"
          />

          <div>
            <p><b>•</b> Hurry! The train leaves <b>in five minutes</b>.</p>
            <p><b>•</b> Bye! I'll see you <b>in a few days</b>.</p>
            <p><b>•</b> I'll talk to you <b>in three weeks</b>.</p>
          </div>

          <div>
            <p>
              <b
                ><img
                  src="/img/icon/warning.png"
                  alt="Icon warning"
                  class="icon-general inline"
                />
                More specific. "in a few day's <mark>time</mark> / in a year's
                <mark>time</mark></b
              >.
            </p>
            <p>
              <b>•</b> Presidential elections will be held
              <b>in ten days' time</b>.
              <span class="portuguese"
                >As eleições presidenciais serão realizadas em dez dias.</span
              >
            </p>
          </div>
        </div>
      </template>
    </CardDescription>
    <Card class="bg-black text-white">
      <p><b>Exercises</b></p>
    </Card>
    <p><b>103.1 Choose</b> <b>at</b>/<b>on</b>/<b>in</b>.</p>
    <LessonStructuresExercisesDropdown :questions="drop" />
  </div>
  
</template>

<style scoped>
.a-containers {
  @apply flex flex-col gap-5 lg:grid grid-cols-[250px_1fr_1fr];
}
</style>
