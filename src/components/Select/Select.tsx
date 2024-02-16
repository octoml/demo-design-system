import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select as ReactAriaSelect,
  SelectValue,
} from "react-aria-components";

const Select = () => (
  <ReactAriaSelect className="select">
    <Label>Title</Label>
    <Button>
      <SelectValue />
      <span aria-hidden="true" className="icon">
        <img src="/icons/chevron.svg" />
      </span>
    </Button>
    <Popover className="select-list">
      <ListBox>
        <ListBoxItem>Aardvark</ListBoxItem>
        <ListBoxItem>Cat</ListBoxItem>
        <ListBoxItem>Dog</ListBoxItem>
        <ListBoxItem>Kangaroo</ListBoxItem>
        <ListBoxItem>Panda</ListBoxItem>
        <ListBoxItem>Snake</ListBoxItem>
      </ListBox>
    </Popover>
  </ReactAriaSelect>
);

export default Select;
