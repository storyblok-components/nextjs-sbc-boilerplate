import { injectScopedInternalComponentList } from "@storyblok-components/utils";
import Placeholder from './Placeholder'

// --- sb-mig scoped component imports ---
import * as ScopedSimpleTextBlock from '@storyblok-components/simple-text-block';



const withComponentList = type => componentList => {
  if(typeof componentList[type] === "undefined") {
    return componentList['placeholder'];
  } else {
    return componentList[type];
  }
}

const Components = type => {
  const temp = withComponentList(type)(ComponentList) // withComponentList('web-ui-text-block')(ComponentList)
  return temp
};

const LocalComponentList = {
  'placeholder': Placeholder
}

const ScopedComponentList = {
  // The injectScopedInternalComponentList is method to inject whole components.js file if scope
  // component have more internal components than just one
  ...injectScopedInternalComponentList(
      {
        components: [
          // --- sb-mig scoped component list ---
          ScopedSimpleTextBlock.ComponentList
        ]
      },
      Components // injecting all Components you will use normally, into any of scoped components
  )
  // If you are using scoped component, but inside your local project (installed with sb-mig add component-name --copy)
  // then use this syntax to import and use component and to inject component list to it
  // surface: withComponents(Surface)(Components)
  // "web-ui-surface": withComponents(SurfaceStuff.WebUISurface)(Components)
};

const ComponentList = {
  ...ScopedComponentList,
  ...LocalComponentList
};

export default Components
