<script lang="ts">
  export let fontSize: number;
  export let text: string;
  export let contained: boolean;
  export let containerMaxWidth: number;
</script>

<body>
  <div class="frame vw12">
    {#if contained}
      <div class="container" style={`max-width: ${containerMaxWidth}px`}>
        <h2>Viewport Width {fontSize}</h2>
        <h1 style={`font-size: ${fontSize}vw`}>{text}</h1>
      </div>
    {:else}
      <h2>Viewport Width {fontSize}</h2>
      <h1 style={`font-size: ${fontSize}vw`}>{text}</h1>
    {/if}
  </div>
</body>

<style>
  @font-face {
    font-family: "Tomato Grotesk";
    font-weight: 400;
    src: url("../regular.otf");
  }

  @font-face {
    font-family: "Tomato Grotesk Semibold";
    font-weight: 600;
    src: url("../semibold.otf");
  }

  body {
    padding: 20px;
    font-family: "Tomato Grotesk";
    --primary: #e12d32;
    --black: #141414;
    background: var(--primary);
  }

  h1 {
    color: var(--black);
    font-family: "Tomato Grotesk Semibold";
    text-transform: uppercase;
    letter-spacing: -2px;
    line-height: 85%;
    margin: 40px 0;
  }

  h2 {
    color: var(--black);
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .frame {
    padding: 20px 0;
    width: 100%;
    border-bottom: 1px solid var(--black);
  }

  .container {
    margin: 0 auto;
  }
</style>
