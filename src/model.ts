export interface FeatureSignature {
  /**
   * The feature (function/type/interface...).
   * Example: countBy
   */
  name: string;

  /**
   * The feature alias name (function/type/interface...).
   * Example: countingBy
   */
  aliasName: string;
  /**
   * The npm package name.
   * Example: lodash
   */
  packageName: string;
  /**
   * The feature signature in Typescript
   * Example: (collection: array|object, fn: function) => object
   */
  signature: string;
}

export interface FeatureRef {
  /**
   * The feature (function/type/interface...).
   * Example: countBy
   */
  name: string;

  /**
   * The feature alias name (function/type/interface...).
   * Example: countingBy
   */
  aliasName: string;
}

export interface Dependency {
  /**
   * The npm package name.
   * Example: lodash
   */
  packageName: string;
  /**
   * The feature (function/type/interface...).
   * Example: countBy
   */
  features: FeatureRef[];
  /**
   * False for Typescript projects
   * True if you need to call a separate yarn add @types/...
   */
  separateTypes: boolean;
  /**
   * True for development dependencies
   */
  isDev: boolean;
}
