<script context="module">
  import { Template, Story } from "@storybook/addon-svelte-csf";
  import TypeTest from "./TypeTest.svelte";

  export const meta = {
    title: "Components/TypeTest",
    component: TypeTest,
    argTypes: {
      text: { control: "text" },
      fontSize: { control: "text" },
      contained: { control: "boolean" },
      containerMaxWidth: { control: "number" },
    },
  };
</script>

<Template let:args>
  <TypeTest {...args} />
</Template>

<Story
  name="Primary"
  args={{
    text: "Upgrading e-commerce for good",
    fontSize: "12",
    contained: false,
    containerMaxWidth: 1600,
  }}
/>
