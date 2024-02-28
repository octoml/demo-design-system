"use client";

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
  /** List item value (used for key) */
  value: string;
  /** List item label */
  label: string;
}
interface SelectProps {
  /** Select field label */
  label?: string;
  /** Select field list items */
  listItems: listItem[];
}

const Select: FC<SelectProps> = ({ label, listItems }) => (
  <ReactAriaSelect className="select" defaultSelectedKey={"2024"}>
    {label && <Label>{label}</Label>}

    <Button>
      <span>
        <span className="mobile-text">Year:</span>
        <SelectValue />
      </span>
      <span aria-hidden="true" className="icon">
        <img src="/icons/chevron.svg" />
      </span>
    </Button>
    <Popover className="select-list">
      <ListBox>
        {listItems?.map((item) => (
          <ListBoxItem key={item.value} id={item?.value}>
            {item?.label}
          </ListBoxItem>
        ))}
      </ListBox>
    </Popover>
  </ReactAriaSelect>
);

export default Select;
