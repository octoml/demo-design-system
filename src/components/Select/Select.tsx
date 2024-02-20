import { FC } from "react";
import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select as ReactAriaSelect,
  SelectValue,
} from "react-aria-components";

interface listItem {
  value: string;
  label: string;
}
interface SelectProps {
  listTitle?: string;
  listItems: listItem[];
}

const Select: FC<SelectProps> = ({ listTitle, listItems }) => (
  <ReactAriaSelect className="select" defaultSelectedKey={"2024"}>
    {listTitle && <Label>{listTitle}</Label>}
    <Button>
      <SelectValue />
      <span aria-hidden="true" className="icon">
        <img src="/icons/chevron.svg" />
      </span>
    </Button>
    <Popover className="select-list">
      <ListBox>
        {listItems?.map((item) => (
          <ListBoxItem id={item?.value}>{item?.label}</ListBoxItem>
        ))}
      </ListBox>
    </Popover>
  </ReactAriaSelect>
);

export default Select;
