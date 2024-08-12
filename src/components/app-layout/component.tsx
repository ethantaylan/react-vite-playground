// componentsMap.tsx
import { DynamicImageImport } from "./dynamic-image-import/dynamic-image-import";
import { AnotherComponent } from "../another-component/another-component";
import { ReactElement } from "react";
import { NavLink, useParams } from "react-router-dom";

export const componentsMap: Record<string, ReactElement> = {
  "dynamic-image-import": <DynamicImageImport />,
  "another-component": <AnotherComponent />,
};

export function Component() {
  const { name } = useParams<{ name: string }>();

  return (
    <>
      {componentsMap[name || ""]}

      <NavLink className="btn btn-secondary btn-ghost mt-10" to={"/"}>
        Back to menu
      </NavLink>
    </>
  );
}
