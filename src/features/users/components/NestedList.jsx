import { useState } from "react";
import { List, ListItemButton, ListItemText, Collapse } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

function NestedItem({ item, level = 0, parentPath = "" }) {
  function buildCleanPath(fullPath) {
    const parts = fullPath.split("/").filter(Boolean);
    if (parts.length <= 2) {
      return "/" + parts.join("/");
    }
    const first = parts[0];
    const last = parts[parts.length - 1];
    return `/${first}/${last}`;
  }
  const [open, setOpen] = useState(false);
  const currentPath = parentPath
    ? `${parentPath}/${item?.name}`
    : `/${item?.name}`;
  const hasChildren = item.subCategories && item.subCategories.length > 0;
  return (
    <>
      <ListItemButton
        onClick={() => hasChildren && setOpen(!open)}
        sx={{
          pl: 2 + level * 2,
          justifyContent: "space-between",
          width: "100%",
        }}
        component={!hasChildren ? "a" : "button"}
        href={!hasChildren ? buildCleanPath(currentPath) : undefined}
        className="flexHorizntel"
      >
        <ListItemText primary={item.name} />

        {hasChildren && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>

      {hasChildren && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List disablePadding>
            {item.subCategories.map((subItem) => (
              <NestedItem
                key={subItem.id}
                item={subItem}
                level={level + 1}
                parentPath={currentPath}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
}

export default function NestedList() {
  const data = [
    {
      id: "1",
      name: "programming",
      subCategories: [
        { id: 31, name: "website" },
        { id: 32, name: "mobile" },
        { id: 12, name: "disktop" },
      ],
    },
    {
      id: "122",
      name: "audio",
      subCategories: [
        {
          id: 2,
          name: "audio",
          subCategories: [
            { id: 323, name: "website" },
            { id: 333, name: "mobile" },
            { id: 4341, name: "disktop" },
          ],
        },
        { id: 123, name: "prof audio" },
        { id: 43, name: "studuio" },
      ],
    },
    {
      id: "342",
      name: "programming",
      subCategories: [
        { id: 323, name: "website" },
        { id: 333, name: "mobile" },
        { id: 4341, name: "disktop" },
      ],
    },
  ];

  return (
    <List>
      {data.map((item) => (
        <NestedItem key={item.id} item={item} />
      ))}
    </List>
  );
}
