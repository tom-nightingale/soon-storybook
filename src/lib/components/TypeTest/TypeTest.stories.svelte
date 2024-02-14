<script context="module">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import TypeTest from "./TypeTest.svelte";

  export const meta = {
    title: "Components/TypeTest",
    component: TypeTest,
    argTypes: {
      fontSize: { control: "text" },
    },
  };
</script>

<Template let:args>
  <TypeTest {...args} />
</Template>

<Story
  name="Primary"
  args={{
    fontSize: "12",
  }}
/>
