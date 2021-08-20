import { useTheme } from '@themes/hooks/useTheme';
import { ComponentNames } from '@themes/theme';
import { ComponentClassesType, getComponentClasses } from '@themes/utils';

export function useComponentClasses<T extends ComponentNames>(
  componentName: T,
  props: any,
  options?: any
): ComponentClassesType<T> {
  const { theme } = useTheme();
  const classes = getComponentClasses<T>(
    theme.value,
    componentName,
    props,
    options
  );

  return classes;
}
