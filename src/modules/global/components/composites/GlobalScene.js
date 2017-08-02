/* @flow */
import React from "react";
import { DefaultRenderer, Actions } from "react-native-router-flux";

type Props = {
  navigationState: Object,
  onNavigate: () => void
};

const GlobalScene = ({
  navigationState,
  onNavigate = scene => {
    console.log(scene);
  }
}: Props) => {
  const children = navigationState.children;
  return (
    <DefaultRenderer
      {...children[children.length - 1]}
      navigationState={children[children.length - 1]}
      onNavigate={onNavigate}
    />
  );
};
export default GlobalScene;
