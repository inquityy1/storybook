import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  label: "Hello",
  backgroundColor: "red",
  size: "md",
};

export const Green = Template.bind({});
Green.args = {
  label: "Hello",
  backgroundColor: "green",
  size: "md",
};

export const Small = Template.bind({});
Small.args = {
  label: "Hello",
  backgroundColor: "red",
  size: "sm",
};

export const Large = Template.bind({});
Large.args = {
  label: "Hello",
  backgroundColor: "red",
  size: "lg",
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  label: "Press Me dasdssdaasddasadsadsdasasddsasd",
  backgroundColor: "red",
  size: "md",
};
