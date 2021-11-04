# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### DataHelmTemplate <a name="@cdktf/provider-helm.DataHelmTemplate"></a>

Represents a {@link https://www.terraform.io/docs/providers/helm/d/template.html helm_template}.

#### Initializers <a name="@cdktf/provider-helm.DataHelmTemplate.Initializer"></a>

```typescript
import { DataHelmTemplate } from '@cdktf/provider-helm'

new DataHelmTemplate(scope: Construct, id: string, config: DataHelmTemplateConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.parameter.config"></a>

- *Type:* [`@cdktf/provider-helm.DataHelmTemplateConfig`](#@cdktf/provider-helm.DataHelmTemplateConfig)

---

#### Methods <a name="Methods"></a>

##### `putPostrender` <a name="@cdktf/provider-helm.DataHelmTemplate.putPostrender"></a>

```typescript
public putPostrender(value?: DataHelmTemplatePostrender)
```

###### `value`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.parameter.value"></a>

- *Type:* [`@cdktf/provider-helm.DataHelmTemplatePostrender`](#@cdktf/provider-helm.DataHelmTemplatePostrender)

---

##### `resetApiVersions` <a name="@cdktf/provider-helm.DataHelmTemplate.resetApiVersions"></a>

```typescript
public resetApiVersions()
```

##### `resetAtomic` <a name="@cdktf/provider-helm.DataHelmTemplate.resetAtomic"></a>

```typescript
public resetAtomic()
```

##### `resetCreateNamespace` <a name="@cdktf/provider-helm.DataHelmTemplate.resetCreateNamespace"></a>

```typescript
public resetCreateNamespace()
```

##### `resetDependencyUpdate` <a name="@cdktf/provider-helm.DataHelmTemplate.resetDependencyUpdate"></a>

```typescript
public resetDependencyUpdate()
```

##### `resetDescription` <a name="@cdktf/provider-helm.DataHelmTemplate.resetDescription"></a>

```typescript
public resetDescription()
```

##### `resetDevel` <a name="@cdktf/provider-helm.DataHelmTemplate.resetDevel"></a>

```typescript
public resetDevel()
```

##### `resetDisableOpenapiValidation` <a name="@cdktf/provider-helm.DataHelmTemplate.resetDisableOpenapiValidation"></a>

```typescript
public resetDisableOpenapiValidation()
```

##### `resetDisableWebhooks` <a name="@cdktf/provider-helm.DataHelmTemplate.resetDisableWebhooks"></a>

```typescript
public resetDisableWebhooks()
```

##### `resetIncludeCrds` <a name="@cdktf/provider-helm.DataHelmTemplate.resetIncludeCrds"></a>

```typescript
public resetIncludeCrds()
```

##### `resetIsUpgrade` <a name="@cdktf/provider-helm.DataHelmTemplate.resetIsUpgrade"></a>

```typescript
public resetIsUpgrade()
```

##### `resetKeyring` <a name="@cdktf/provider-helm.DataHelmTemplate.resetKeyring"></a>

```typescript
public resetKeyring()
```

##### `resetManifest` <a name="@cdktf/provider-helm.DataHelmTemplate.resetManifest"></a>

```typescript
public resetManifest()
```

##### `resetManifests` <a name="@cdktf/provider-helm.DataHelmTemplate.resetManifests"></a>

```typescript
public resetManifests()
```

##### `resetNamespace` <a name="@cdktf/provider-helm.DataHelmTemplate.resetNamespace"></a>

```typescript
public resetNamespace()
```

##### `resetNotes` <a name="@cdktf/provider-helm.DataHelmTemplate.resetNotes"></a>

```typescript
public resetNotes()
```

##### `resetPostrender` <a name="@cdktf/provider-helm.DataHelmTemplate.resetPostrender"></a>

```typescript
public resetPostrender()
```

##### `resetRenderSubchartNotes` <a name="@cdktf/provider-helm.DataHelmTemplate.resetRenderSubchartNotes"></a>

```typescript
public resetRenderSubchartNotes()
```

##### `resetReplace` <a name="@cdktf/provider-helm.DataHelmTemplate.resetReplace"></a>

```typescript
public resetReplace()
```

##### `resetRepository` <a name="@cdktf/provider-helm.DataHelmTemplate.resetRepository"></a>

```typescript
public resetRepository()
```

##### `resetRepositoryCaFile` <a name="@cdktf/provider-helm.DataHelmTemplate.resetRepositoryCaFile"></a>

```typescript
public resetRepositoryCaFile()
```

##### `resetRepositoryCertFile` <a name="@cdktf/provider-helm.DataHelmTemplate.resetRepositoryCertFile"></a>

```typescript
public resetRepositoryCertFile()
```

##### `resetRepositoryKeyFile` <a name="@cdktf/provider-helm.DataHelmTemplate.resetRepositoryKeyFile"></a>

```typescript
public resetRepositoryKeyFile()
```

##### `resetRepositoryPassword` <a name="@cdktf/provider-helm.DataHelmTemplate.resetRepositoryPassword"></a>

```typescript
public resetRepositoryPassword()
```

##### `resetRepositoryUsername` <a name="@cdktf/provider-helm.DataHelmTemplate.resetRepositoryUsername"></a>

```typescript
public resetRepositoryUsername()
```

##### `resetResetValues` <a name="@cdktf/provider-helm.DataHelmTemplate.resetResetValues"></a>

```typescript
public resetResetValues()
```

##### `resetReuseValues` <a name="@cdktf/provider-helm.DataHelmTemplate.resetReuseValues"></a>

```typescript
public resetReuseValues()
```

##### `resetSet` <a name="@cdktf/provider-helm.DataHelmTemplate.resetSet"></a>

```typescript
public resetSet()
```

##### `resetSetSensitive` <a name="@cdktf/provider-helm.DataHelmTemplate.resetSetSensitive"></a>

```typescript
public resetSetSensitive()
```

##### `resetSetString` <a name="@cdktf/provider-helm.DataHelmTemplate.resetSetString"></a>

```typescript
public resetSetString()
```

##### `resetShowOnly` <a name="@cdktf/provider-helm.DataHelmTemplate.resetShowOnly"></a>

```typescript
public resetShowOnly()
```

##### `resetSkipCrds` <a name="@cdktf/provider-helm.DataHelmTemplate.resetSkipCrds"></a>

```typescript
public resetSkipCrds()
```

##### `resetSkipTests` <a name="@cdktf/provider-helm.DataHelmTemplate.resetSkipTests"></a>

```typescript
public resetSkipTests()
```

##### `resetTfValues` <a name="@cdktf/provider-helm.DataHelmTemplate.resetTfValues"></a>

```typescript
public resetTfValues()
```

##### `resetTimeout` <a name="@cdktf/provider-helm.DataHelmTemplate.resetTimeout"></a>

```typescript
public resetTimeout()
```

##### `resetValidate` <a name="@cdktf/provider-helm.DataHelmTemplate.resetValidate"></a>

```typescript
public resetValidate()
```

##### `resetVerify` <a name="@cdktf/provider-helm.DataHelmTemplate.resetVerify"></a>

```typescript
public resetVerify()
```

##### `resetVersion` <a name="@cdktf/provider-helm.DataHelmTemplate.resetVersion"></a>

```typescript
public resetVersion()
```

##### `resetWait` <a name="@cdktf/provider-helm.DataHelmTemplate.resetWait"></a>

```typescript
public resetWait()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `postrender`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.postrender"></a>

```typescript
public readonly postrender: DataHelmTemplatePostrenderOutputReference;
```

- *Type:* [`@cdktf/provider-helm.DataHelmTemplatePostrenderOutputReference`](#@cdktf/provider-helm.DataHelmTemplatePostrenderOutputReference)

---

##### `apiVersionsInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.apiVersionsInput"></a>

```typescript
public readonly apiVersionsInput: string[];
```

- *Type:* `string`[]

---

##### `atomicInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.atomicInput"></a>

```typescript
public readonly atomicInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `chartInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.chartInput"></a>

```typescript
public readonly chartInput: string;
```

- *Type:* `string`

---

##### `createNamespaceInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.createNamespaceInput"></a>

```typescript
public readonly createNamespaceInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependencyUpdateInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.dependencyUpdateInput"></a>

```typescript
public readonly dependencyUpdateInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `develInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.develInput"></a>

```typescript
public readonly develInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `disableOpenapiValidationInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.disableOpenapiValidationInput"></a>

```typescript
public readonly disableOpenapiValidationInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `disableWebhooksInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.disableWebhooksInput"></a>

```typescript
public readonly disableWebhooksInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `includeCrdsInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.includeCrdsInput"></a>

```typescript
public readonly includeCrdsInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `isUpgradeInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.isUpgradeInput"></a>

```typescript
public readonly isUpgradeInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `keyringInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.keyringInput"></a>

```typescript
public readonly keyringInput: string;
```

- *Type:* `string`

---

##### `manifestInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.manifestInput"></a>

```typescript
public readonly manifestInput: string;
```

- *Type:* `string`

---

##### `manifestsInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.manifestsInput"></a>

```typescript
public readonly manifestsInput: IResolvable | {[ key: string ]: string};
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `namespaceInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* `string`

---

##### `notesInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.notesInput"></a>

```typescript
public readonly notesInput: string;
```

- *Type:* `string`

---

##### `postrenderInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.postrenderInput"></a>

```typescript
public readonly postrenderInput: DataHelmTemplatePostrender;
```

- *Type:* [`@cdktf/provider-helm.DataHelmTemplatePostrender`](#@cdktf/provider-helm.DataHelmTemplatePostrender)

---

##### `renderSubchartNotesInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.renderSubchartNotesInput"></a>

```typescript
public readonly renderSubchartNotesInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `replaceInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.replaceInput"></a>

```typescript
public readonly replaceInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `repositoryCaFileInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.repositoryCaFileInput"></a>

```typescript
public readonly repositoryCaFileInput: string;
```

- *Type:* `string`

---

##### `repositoryCertFileInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.repositoryCertFileInput"></a>

```typescript
public readonly repositoryCertFileInput: string;
```

- *Type:* `string`

---

##### `repositoryInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* `string`

---

##### `repositoryKeyFileInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.repositoryKeyFileInput"></a>

```typescript
public readonly repositoryKeyFileInput: string;
```

- *Type:* `string`

---

##### `repositoryPasswordInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.repositoryPasswordInput"></a>

```typescript
public readonly repositoryPasswordInput: string;
```

- *Type:* `string`

---

##### `repositoryUsernameInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.repositoryUsernameInput"></a>

```typescript
public readonly repositoryUsernameInput: string;
```

- *Type:* `string`

---

##### `resetValuesInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.resetValuesInput"></a>

```typescript
public readonly resetValuesInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `reuseValuesInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.reuseValuesInput"></a>

```typescript
public readonly reuseValuesInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `setInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.setInput"></a>

```typescript
public readonly setInput: DataHelmTemplateSet[];
```

- *Type:* [`@cdktf/provider-helm.DataHelmTemplateSet`](#@cdktf/provider-helm.DataHelmTemplateSet)[]

---

##### `setSensitiveInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.setSensitiveInput"></a>

```typescript
public readonly setSensitiveInput: DataHelmTemplateSetSensitive[];
```

- *Type:* [`@cdktf/provider-helm.DataHelmTemplateSetSensitive`](#@cdktf/provider-helm.DataHelmTemplateSetSensitive)[]

---

##### `setStringInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.setStringInput"></a>

```typescript
public readonly setStringInput: DataHelmTemplateSetString[];
```

- *Type:* [`@cdktf/provider-helm.DataHelmTemplateSetString`](#@cdktf/provider-helm.DataHelmTemplateSetString)[]

---

##### `showOnlyInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.showOnlyInput"></a>

```typescript
public readonly showOnlyInput: string[];
```

- *Type:* `string`[]

---

##### `skipCrdsInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.skipCrdsInput"></a>

```typescript
public readonly skipCrdsInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `skipTestsInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.skipTestsInput"></a>

```typescript
public readonly skipTestsInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `timeoutInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* `number`

---

##### `validateInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.validateInput"></a>

```typescript
public readonly validateInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `valuesInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* `string`[]

---

##### `verifyInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.verifyInput"></a>

```typescript
public readonly verifyInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `versionInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* `string`

---

##### `waitInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.waitInput"></a>

```typescript
public readonly waitInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `chart`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.chart"></a>

```typescript
public readonly chart: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `apiVersions`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.apiVersions"></a>

```typescript
public readonly apiVersions: string[];
```

- *Type:* `string`[]

---

##### `atomic`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.atomic"></a>

```typescript
public readonly atomic: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `createNamespace`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.createNamespace"></a>

```typescript
public readonly createNamespace: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependencyUpdate`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.dependencyUpdate"></a>

```typescript
public readonly dependencyUpdate: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `devel`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.devel"></a>

```typescript
public readonly devel: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `disableOpenapiValidation`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.disableOpenapiValidation"></a>

```typescript
public readonly disableOpenapiValidation: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `disableWebhooks`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.disableWebhooks"></a>

```typescript
public readonly disableWebhooks: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `includeCrds`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.includeCrds"></a>

```typescript
public readonly includeCrds: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `isUpgrade`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.isUpgrade"></a>

```typescript
public readonly isUpgrade: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `keyring`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.keyring"></a>

```typescript
public readonly keyring: string;
```

- *Type:* `string`

---

##### `manifest`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.manifest"></a>

```typescript
public readonly manifest: string;
```

- *Type:* `string`

---

##### `manifests`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.manifests"></a>

```typescript
public readonly manifests: IResolvable | {[ key: string ]: string};
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

---

##### `namespace`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* `string`

---

##### `notes`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* `string`

---

##### `renderSubchartNotes`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.renderSubchartNotes"></a>

```typescript
public readonly renderSubchartNotes: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `replace`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.replace"></a>

```typescript
public readonly replace: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `repository`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* `string`

---

##### `repositoryCaFile`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.repositoryCaFile"></a>

```typescript
public readonly repositoryCaFile: string;
```

- *Type:* `string`

---

##### `repositoryCertFile`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.repositoryCertFile"></a>

```typescript
public readonly repositoryCertFile: string;
```

- *Type:* `string`

---

##### `repositoryKeyFile`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.repositoryKeyFile"></a>

```typescript
public readonly repositoryKeyFile: string;
```

- *Type:* `string`

---

##### `repositoryPassword`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.repositoryPassword"></a>

```typescript
public readonly repositoryPassword: string;
```

- *Type:* `string`

---

##### `repositoryUsername`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.repositoryUsername"></a>

```typescript
public readonly repositoryUsername: string;
```

- *Type:* `string`

---

##### `resetValues`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.resetValues"></a>

```typescript
public readonly resetValues: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `reuseValues`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.reuseValues"></a>

```typescript
public readonly reuseValues: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `set`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.set"></a>

```typescript
public readonly set: DataHelmTemplateSet[];
```

- *Type:* [`@cdktf/provider-helm.DataHelmTemplateSet`](#@cdktf/provider-helm.DataHelmTemplateSet)[]

---

##### `setSensitive`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.setSensitive"></a>

```typescript
public readonly setSensitive: DataHelmTemplateSetSensitive[];
```

- *Type:* [`@cdktf/provider-helm.DataHelmTemplateSetSensitive`](#@cdktf/provider-helm.DataHelmTemplateSetSensitive)[]

---

##### `setString`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.setString"></a>

```typescript
public readonly setString: DataHelmTemplateSetString[];
```

- *Type:* [`@cdktf/provider-helm.DataHelmTemplateSetString`](#@cdktf/provider-helm.DataHelmTemplateSetString)[]

---

##### `showOnly`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.showOnly"></a>

```typescript
public readonly showOnly: string[];
```

- *Type:* `string`[]

---

##### `skipCrds`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.skipCrds"></a>

```typescript
public readonly skipCrds: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `skipTests`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.skipTests"></a>

```typescript
public readonly skipTests: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `timeout`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* `number`

---

##### `validate`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.validate"></a>

```typescript
public readonly validate: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `values`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* `string`[]

---

##### `verify`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.verify"></a>

```typescript
public readonly verify: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `version`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* `string`

---

##### `wait`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.wait"></a>

```typescript
public readonly wait: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-helm.DataHelmTemplate.property.tfResourceType"></a>

- *Type:* `string`

---

### HelmProvider <a name="@cdktf/provider-helm.HelmProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/helm helm}.

#### Initializers <a name="@cdktf/provider-helm.HelmProvider.Initializer"></a>

```typescript
import { HelmProvider } from '@cdktf/provider-helm'

new HelmProvider(scope: Construct, id: string, config?: HelmProviderConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-helm.HelmProvider.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-helm.HelmProvider.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProvider.parameter.config"></a>

- *Type:* [`@cdktf/provider-helm.HelmProviderConfig`](#@cdktf/provider-helm.HelmProviderConfig)

---

#### Methods <a name="Methods"></a>

##### `resetAlias` <a name="@cdktf/provider-helm.HelmProvider.resetAlias"></a>

```typescript
public resetAlias()
```

##### `resetDebug` <a name="@cdktf/provider-helm.HelmProvider.resetDebug"></a>

```typescript
public resetDebug()
```

##### `resetExperiments` <a name="@cdktf/provider-helm.HelmProvider.resetExperiments"></a>

```typescript
public resetExperiments()
```

##### `resetHelmDriver` <a name="@cdktf/provider-helm.HelmProvider.resetHelmDriver"></a>

```typescript
public resetHelmDriver()
```

##### `resetKubernetes` <a name="@cdktf/provider-helm.HelmProvider.resetKubernetes"></a>

```typescript
public resetKubernetes()
```

##### `resetPluginsPath` <a name="@cdktf/provider-helm.HelmProvider.resetPluginsPath"></a>

```typescript
public resetPluginsPath()
```

##### `resetRegistryConfigPath` <a name="@cdktf/provider-helm.HelmProvider.resetRegistryConfigPath"></a>

```typescript
public resetRegistryConfigPath()
```

##### `resetRepositoryCache` <a name="@cdktf/provider-helm.HelmProvider.resetRepositoryCache"></a>

```typescript
public resetRepositoryCache()
```

##### `resetRepositoryConfigPath` <a name="@cdktf/provider-helm.HelmProvider.resetRepositoryConfigPath"></a>

```typescript
public resetRepositoryConfigPath()
```


#### Properties <a name="Properties"></a>

##### `aliasInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* `string`

---

##### `debugInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProvider.property.debugInput"></a>

```typescript
public readonly debugInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `experimentsInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProvider.property.experimentsInput"></a>

```typescript
public readonly experimentsInput: HelmProviderExperiments;
```

- *Type:* [`@cdktf/provider-helm.HelmProviderExperiments`](#@cdktf/provider-helm.HelmProviderExperiments)

---

##### `helmDriverInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProvider.property.helmDriverInput"></a>

```typescript
public readonly helmDriverInput: string;
```

- *Type:* `string`

---

##### `kubernetesInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProvider.property.kubernetesInput"></a>

```typescript
public readonly kubernetesInput: HelmProviderKubernetes;
```

- *Type:* [`@cdktf/provider-helm.HelmProviderKubernetes`](#@cdktf/provider-helm.HelmProviderKubernetes)

---

##### `pluginsPathInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProvider.property.pluginsPathInput"></a>

```typescript
public readonly pluginsPathInput: string;
```

- *Type:* `string`

---

##### `registryConfigPathInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProvider.property.registryConfigPathInput"></a>

```typescript
public readonly registryConfigPathInput: string;
```

- *Type:* `string`

---

##### `repositoryCacheInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProvider.property.repositoryCacheInput"></a>

```typescript
public readonly repositoryCacheInput: string;
```

- *Type:* `string`

---

##### `repositoryConfigPathInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProvider.property.repositoryConfigPathInput"></a>

```typescript
public readonly repositoryConfigPathInput: string;
```

- *Type:* `string`

---

##### `alias`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* `string`

---

##### `debug`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProvider.property.debug"></a>

```typescript
public readonly debug: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `experiments`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProvider.property.experiments"></a>

```typescript
public readonly experiments: HelmProviderExperiments;
```

- *Type:* [`@cdktf/provider-helm.HelmProviderExperiments`](#@cdktf/provider-helm.HelmProviderExperiments)

---

##### `helmDriver`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProvider.property.helmDriver"></a>

```typescript
public readonly helmDriver: string;
```

- *Type:* `string`

---

##### `kubernetes`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProvider.property.kubernetes"></a>

```typescript
public readonly kubernetes: HelmProviderKubernetes;
```

- *Type:* [`@cdktf/provider-helm.HelmProviderKubernetes`](#@cdktf/provider-helm.HelmProviderKubernetes)

---

##### `pluginsPath`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProvider.property.pluginsPath"></a>

```typescript
public readonly pluginsPath: string;
```

- *Type:* `string`

---

##### `registryConfigPath`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProvider.property.registryConfigPath"></a>

```typescript
public readonly registryConfigPath: string;
```

- *Type:* `string`

---

##### `repositoryCache`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProvider.property.repositoryCache"></a>

```typescript
public readonly repositoryCache: string;
```

- *Type:* `string`

---

##### `repositoryConfigPath`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProvider.property.repositoryConfigPath"></a>

```typescript
public readonly repositoryConfigPath: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-helm.HelmProvider.property.tfResourceType"></a>

- *Type:* `string`

---

### Release <a name="@cdktf/provider-helm.Release"></a>

Represents a {@link https://www.terraform.io/docs/providers/helm/r/release.html helm_release}.

#### Initializers <a name="@cdktf/provider-helm.Release.Initializer"></a>

```typescript
import { Release } from '@cdktf/provider-helm'

new Release(scope: Construct, id: string, config: ReleaseConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.parameter.config"></a>

- *Type:* [`@cdktf/provider-helm.ReleaseConfig`](#@cdktf/provider-helm.ReleaseConfig)

---

#### Methods <a name="Methods"></a>

##### `metadata` <a name="@cdktf/provider-helm.Release.metadata"></a>

```typescript
public metadata(index: string)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.parameter.index"></a>

- *Type:* `string`

---

##### `putPostrender` <a name="@cdktf/provider-helm.Release.putPostrender"></a>

```typescript
public putPostrender(value?: ReleasePostrender)
```

###### `value`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.parameter.value"></a>

- *Type:* [`@cdktf/provider-helm.ReleasePostrender`](#@cdktf/provider-helm.ReleasePostrender)

---

##### `resetAtomic` <a name="@cdktf/provider-helm.Release.resetAtomic"></a>

```typescript
public resetAtomic()
```

##### `resetCleanupOnFail` <a name="@cdktf/provider-helm.Release.resetCleanupOnFail"></a>

```typescript
public resetCleanupOnFail()
```

##### `resetCreateNamespace` <a name="@cdktf/provider-helm.Release.resetCreateNamespace"></a>

```typescript
public resetCreateNamespace()
```

##### `resetDependencyUpdate` <a name="@cdktf/provider-helm.Release.resetDependencyUpdate"></a>

```typescript
public resetDependencyUpdate()
```

##### `resetDescription` <a name="@cdktf/provider-helm.Release.resetDescription"></a>

```typescript
public resetDescription()
```

##### `resetDevel` <a name="@cdktf/provider-helm.Release.resetDevel"></a>

```typescript
public resetDevel()
```

##### `resetDisableCrdHooks` <a name="@cdktf/provider-helm.Release.resetDisableCrdHooks"></a>

```typescript
public resetDisableCrdHooks()
```

##### `resetDisableOpenapiValidation` <a name="@cdktf/provider-helm.Release.resetDisableOpenapiValidation"></a>

```typescript
public resetDisableOpenapiValidation()
```

##### `resetDisableWebhooks` <a name="@cdktf/provider-helm.Release.resetDisableWebhooks"></a>

```typescript
public resetDisableWebhooks()
```

##### `resetForceUpdate` <a name="@cdktf/provider-helm.Release.resetForceUpdate"></a>

```typescript
public resetForceUpdate()
```

##### `resetKeyring` <a name="@cdktf/provider-helm.Release.resetKeyring"></a>

```typescript
public resetKeyring()
```

##### `resetLint` <a name="@cdktf/provider-helm.Release.resetLint"></a>

```typescript
public resetLint()
```

##### `resetMaxHistory` <a name="@cdktf/provider-helm.Release.resetMaxHistory"></a>

```typescript
public resetMaxHistory()
```

##### `resetNamespace` <a name="@cdktf/provider-helm.Release.resetNamespace"></a>

```typescript
public resetNamespace()
```

##### `resetPostrender` <a name="@cdktf/provider-helm.Release.resetPostrender"></a>

```typescript
public resetPostrender()
```

##### `resetRecreatePods` <a name="@cdktf/provider-helm.Release.resetRecreatePods"></a>

```typescript
public resetRecreatePods()
```

##### `resetRenderSubchartNotes` <a name="@cdktf/provider-helm.Release.resetRenderSubchartNotes"></a>

```typescript
public resetRenderSubchartNotes()
```

##### `resetReplace` <a name="@cdktf/provider-helm.Release.resetReplace"></a>

```typescript
public resetReplace()
```

##### `resetRepository` <a name="@cdktf/provider-helm.Release.resetRepository"></a>

```typescript
public resetRepository()
```

##### `resetRepositoryCaFile` <a name="@cdktf/provider-helm.Release.resetRepositoryCaFile"></a>

```typescript
public resetRepositoryCaFile()
```

##### `resetRepositoryCertFile` <a name="@cdktf/provider-helm.Release.resetRepositoryCertFile"></a>

```typescript
public resetRepositoryCertFile()
```

##### `resetRepositoryKeyFile` <a name="@cdktf/provider-helm.Release.resetRepositoryKeyFile"></a>

```typescript
public resetRepositoryKeyFile()
```

##### `resetRepositoryPassword` <a name="@cdktf/provider-helm.Release.resetRepositoryPassword"></a>

```typescript
public resetRepositoryPassword()
```

##### `resetRepositoryUsername` <a name="@cdktf/provider-helm.Release.resetRepositoryUsername"></a>

```typescript
public resetRepositoryUsername()
```

##### `resetResetValues` <a name="@cdktf/provider-helm.Release.resetResetValues"></a>

```typescript
public resetResetValues()
```

##### `resetReuseValues` <a name="@cdktf/provider-helm.Release.resetReuseValues"></a>

```typescript
public resetReuseValues()
```

##### `resetSet` <a name="@cdktf/provider-helm.Release.resetSet"></a>

```typescript
public resetSet()
```

##### `resetSetSensitive` <a name="@cdktf/provider-helm.Release.resetSetSensitive"></a>

```typescript
public resetSetSensitive()
```

##### `resetSkipCrds` <a name="@cdktf/provider-helm.Release.resetSkipCrds"></a>

```typescript
public resetSkipCrds()
```

##### `resetTfValues` <a name="@cdktf/provider-helm.Release.resetTfValues"></a>

```typescript
public resetTfValues()
```

##### `resetTimeout` <a name="@cdktf/provider-helm.Release.resetTimeout"></a>

```typescript
public resetTimeout()
```

##### `resetVerify` <a name="@cdktf/provider-helm.Release.resetVerify"></a>

```typescript
public resetVerify()
```

##### `resetVersion` <a name="@cdktf/provider-helm.Release.resetVersion"></a>

```typescript
public resetVersion()
```

##### `resetWait` <a name="@cdktf/provider-helm.Release.resetWait"></a>

```typescript
public resetWait()
```

##### `resetWaitForJobs` <a name="@cdktf/provider-helm.Release.resetWaitForJobs"></a>

```typescript
public resetWaitForJobs()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `manifest`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.manifest"></a>

```typescript
public readonly manifest: string;
```

- *Type:* `string`

---

##### `postrender`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.postrender"></a>

```typescript
public readonly postrender: ReleasePostrenderOutputReference;
```

- *Type:* [`@cdktf/provider-helm.ReleasePostrenderOutputReference`](#@cdktf/provider-helm.ReleasePostrenderOutputReference)

---

##### `status`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* `string`

---

##### `atomicInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.atomicInput"></a>

```typescript
public readonly atomicInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `chartInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.chartInput"></a>

```typescript
public readonly chartInput: string;
```

- *Type:* `string`

---

##### `cleanupOnFailInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.cleanupOnFailInput"></a>

```typescript
public readonly cleanupOnFailInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `createNamespaceInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.createNamespaceInput"></a>

```typescript
public readonly createNamespaceInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependencyUpdateInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.dependencyUpdateInput"></a>

```typescript
public readonly dependencyUpdateInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `develInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.develInput"></a>

```typescript
public readonly develInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `disableCrdHooksInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.disableCrdHooksInput"></a>

```typescript
public readonly disableCrdHooksInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `disableOpenapiValidationInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.disableOpenapiValidationInput"></a>

```typescript
public readonly disableOpenapiValidationInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `disableWebhooksInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.disableWebhooksInput"></a>

```typescript
public readonly disableWebhooksInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `forceUpdateInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.forceUpdateInput"></a>

```typescript
public readonly forceUpdateInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `keyringInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.keyringInput"></a>

```typescript
public readonly keyringInput: string;
```

- *Type:* `string`

---

##### `lintInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.lintInput"></a>

```typescript
public readonly lintInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `maxHistoryInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.maxHistoryInput"></a>

```typescript
public readonly maxHistoryInput: number;
```

- *Type:* `number`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `namespaceInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* `string`

---

##### `postrenderInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.postrenderInput"></a>

```typescript
public readonly postrenderInput: ReleasePostrender;
```

- *Type:* [`@cdktf/provider-helm.ReleasePostrender`](#@cdktf/provider-helm.ReleasePostrender)

---

##### `recreatePodsInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.recreatePodsInput"></a>

```typescript
public readonly recreatePodsInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `renderSubchartNotesInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.renderSubchartNotesInput"></a>

```typescript
public readonly renderSubchartNotesInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `replaceInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.replaceInput"></a>

```typescript
public readonly replaceInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `repositoryCaFileInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.repositoryCaFileInput"></a>

```typescript
public readonly repositoryCaFileInput: string;
```

- *Type:* `string`

---

##### `repositoryCertFileInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.repositoryCertFileInput"></a>

```typescript
public readonly repositoryCertFileInput: string;
```

- *Type:* `string`

---

##### `repositoryInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* `string`

---

##### `repositoryKeyFileInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.repositoryKeyFileInput"></a>

```typescript
public readonly repositoryKeyFileInput: string;
```

- *Type:* `string`

---

##### `repositoryPasswordInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.repositoryPasswordInput"></a>

```typescript
public readonly repositoryPasswordInput: string;
```

- *Type:* `string`

---

##### `repositoryUsernameInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.repositoryUsernameInput"></a>

```typescript
public readonly repositoryUsernameInput: string;
```

- *Type:* `string`

---

##### `resetValuesInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.resetValuesInput"></a>

```typescript
public readonly resetValuesInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `reuseValuesInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.reuseValuesInput"></a>

```typescript
public readonly reuseValuesInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `setInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.setInput"></a>

```typescript
public readonly setInput: ReleaseSet[];
```

- *Type:* [`@cdktf/provider-helm.ReleaseSet`](#@cdktf/provider-helm.ReleaseSet)[]

---

##### `setSensitiveInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.setSensitiveInput"></a>

```typescript
public readonly setSensitiveInput: ReleaseSetSensitive[];
```

- *Type:* [`@cdktf/provider-helm.ReleaseSetSensitive`](#@cdktf/provider-helm.ReleaseSetSensitive)[]

---

##### `skipCrdsInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.skipCrdsInput"></a>

```typescript
public readonly skipCrdsInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `timeoutInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* `number`

---

##### `valuesInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* `string`[]

---

##### `verifyInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.verifyInput"></a>

```typescript
public readonly verifyInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `versionInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* `string`

---

##### `waitForJobsInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.waitForJobsInput"></a>

```typescript
public readonly waitForJobsInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `waitInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.waitInput"></a>

```typescript
public readonly waitInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `chart`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.chart"></a>

```typescript
public readonly chart: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `atomic`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.atomic"></a>

```typescript
public readonly atomic: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `cleanupOnFail`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.cleanupOnFail"></a>

```typescript
public readonly cleanupOnFail: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `createNamespace`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.createNamespace"></a>

```typescript
public readonly createNamespace: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependencyUpdate`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.dependencyUpdate"></a>

```typescript
public readonly dependencyUpdate: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `devel`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.devel"></a>

```typescript
public readonly devel: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `disableCrdHooks`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.disableCrdHooks"></a>

```typescript
public readonly disableCrdHooks: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `disableOpenapiValidation`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.disableOpenapiValidation"></a>

```typescript
public readonly disableOpenapiValidation: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `disableWebhooks`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.disableWebhooks"></a>

```typescript
public readonly disableWebhooks: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `forceUpdate`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.forceUpdate"></a>

```typescript
public readonly forceUpdate: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `keyring`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.keyring"></a>

```typescript
public readonly keyring: string;
```

- *Type:* `string`

---

##### `lint`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.lint"></a>

```typescript
public readonly lint: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `maxHistory`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.maxHistory"></a>

```typescript
public readonly maxHistory: number;
```

- *Type:* `number`

---

##### `namespace`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* `string`

---

##### `recreatePods`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.recreatePods"></a>

```typescript
public readonly recreatePods: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `renderSubchartNotes`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.renderSubchartNotes"></a>

```typescript
public readonly renderSubchartNotes: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `replace`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.replace"></a>

```typescript
public readonly replace: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `repository`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* `string`

---

##### `repositoryCaFile`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.repositoryCaFile"></a>

```typescript
public readonly repositoryCaFile: string;
```

- *Type:* `string`

---

##### `repositoryCertFile`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.repositoryCertFile"></a>

```typescript
public readonly repositoryCertFile: string;
```

- *Type:* `string`

---

##### `repositoryKeyFile`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.repositoryKeyFile"></a>

```typescript
public readonly repositoryKeyFile: string;
```

- *Type:* `string`

---

##### `repositoryPassword`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.repositoryPassword"></a>

```typescript
public readonly repositoryPassword: string;
```

- *Type:* `string`

---

##### `repositoryUsername`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.repositoryUsername"></a>

```typescript
public readonly repositoryUsername: string;
```

- *Type:* `string`

---

##### `resetValues`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.resetValues"></a>

```typescript
public readonly resetValues: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `reuseValues`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.reuseValues"></a>

```typescript
public readonly reuseValues: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `set`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.set"></a>

```typescript
public readonly set: ReleaseSet[];
```

- *Type:* [`@cdktf/provider-helm.ReleaseSet`](#@cdktf/provider-helm.ReleaseSet)[]

---

##### `setSensitive`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.setSensitive"></a>

```typescript
public readonly setSensitive: ReleaseSetSensitive[];
```

- *Type:* [`@cdktf/provider-helm.ReleaseSetSensitive`](#@cdktf/provider-helm.ReleaseSetSensitive)[]

---

##### `skipCrds`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.skipCrds"></a>

```typescript
public readonly skipCrds: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `timeout`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* `number`

---

##### `values`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* `string`[]

---

##### `verify`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.verify"></a>

```typescript
public readonly verify: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `version`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* `string`

---

##### `wait`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.wait"></a>

```typescript
public readonly wait: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `waitForJobs`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.waitForJobs"></a>

```typescript
public readonly waitForJobs: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-helm.Release.property.tfResourceType"></a>

- *Type:* `string`

---

## Structs <a name="Structs"></a>

### DataHelmTemplateConfig <a name="@cdktf/provider-helm.DataHelmTemplateConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataHelmTemplateConfig } from '@cdktf/provider-helm'

const dataHelmTemplateConfig: DataHelmTemplateConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `chart`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.chart"></a>

```typescript
public readonly chart: string;
```

- *Type:* `string`

Chart name to be installed. A path may be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#chart DataHelmTemplate#chart}

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Release name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#name DataHelmTemplate#name}

---

##### `apiVersions`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.apiVersions"></a>

```typescript
public readonly apiVersions: string[];
```

- *Type:* `string`[]

Kubernetes api versions used for Capabilities.APIVersions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#api_versions DataHelmTemplate#api_versions}

---

##### `atomic`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.atomic"></a>

```typescript
public readonly atomic: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

If set, installation process purges chart on fail. The wait flag will be set automatically if atomic is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#atomic DataHelmTemplate#atomic}

---

##### `createNamespace`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.createNamespace"></a>

```typescript
public readonly createNamespace: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Create the namespace if it does not exist.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#create_namespace DataHelmTemplate#create_namespace}

---

##### `dependencyUpdate`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.dependencyUpdate"></a>

```typescript
public readonly dependencyUpdate: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Run helm dependency update before installing the chart.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#dependency_update DataHelmTemplate#dependency_update}

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

Add a custom description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#description DataHelmTemplate#description}

---

##### `devel`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.devel"></a>

```typescript
public readonly devel: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#devel DataHelmTemplate#devel}

---

##### `disableOpenapiValidation`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.disableOpenapiValidation"></a>

```typescript
public readonly disableOpenapiValidation: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#disable_openapi_validation DataHelmTemplate#disable_openapi_validation}

---

##### `disableWebhooks`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.disableWebhooks"></a>

```typescript
public readonly disableWebhooks: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Prevent hooks from running.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#disable_webhooks DataHelmTemplate#disable_webhooks}

---

##### `includeCrds`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.includeCrds"></a>

```typescript
public readonly includeCrds: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Include CRDs in the templated output.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#include_crds DataHelmTemplate#include_crds}

---

##### `isUpgrade`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.isUpgrade"></a>

```typescript
public readonly isUpgrade: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Set .Release.IsUpgrade instead of .Release.IsInstall.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#is_upgrade DataHelmTemplate#is_upgrade}

---

##### `keyring`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.keyring"></a>

```typescript
public readonly keyring: string;
```

- *Type:* `string`

Location of public keys used for verification. Used only if `verify` is true.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#keyring DataHelmTemplate#keyring}

---

##### `manifest`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.manifest"></a>

```typescript
public readonly manifest: string;
```

- *Type:* `string`

Concatenated rendered chart templates. This corresponds to the output of the `helm template` command.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#manifest DataHelmTemplate#manifest}

---

##### `manifests`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.manifests"></a>

```typescript
public readonly manifests: IResolvable | {[ key: string ]: string};
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

Map of rendered chart templates indexed by the template name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#manifests DataHelmTemplate#manifests}

---

##### `namespace`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* `string`

Namespace to install the release into.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#namespace DataHelmTemplate#namespace}

---

##### `notes`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* `string`

Rendered notes if the chart contains a `NOTES.txt`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#notes DataHelmTemplate#notes}

---

##### `postrender`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.postrender"></a>

```typescript
public readonly postrender: DataHelmTemplatePostrender;
```

- *Type:* [`@cdktf/provider-helm.DataHelmTemplatePostrender`](#@cdktf/provider-helm.DataHelmTemplatePostrender)

postrender block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#postrender DataHelmTemplate#postrender}

---

##### `renderSubchartNotes`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.renderSubchartNotes"></a>

```typescript
public readonly renderSubchartNotes: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

If set, render subchart notes along with the parent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#render_subchart_notes DataHelmTemplate#render_subchart_notes}

---

##### `replace`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.replace"></a>

```typescript
public readonly replace: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Re-use the given name, even if that name is already used. This is unsafe in production.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#replace DataHelmTemplate#replace}

---

##### `repository`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* `string`

Repository where to locate the requested chart. If is a URL the chart is installed without installing the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#repository DataHelmTemplate#repository}

---

##### `repositoryCaFile`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.repositoryCaFile"></a>

```typescript
public readonly repositoryCaFile: string;
```

- *Type:* `string`

The Repositories CA File.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#repository_ca_file DataHelmTemplate#repository_ca_file}

---

##### `repositoryCertFile`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.repositoryCertFile"></a>

```typescript
public readonly repositoryCertFile: string;
```

- *Type:* `string`

The repositories cert file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#repository_cert_file DataHelmTemplate#repository_cert_file}

---

##### `repositoryKeyFile`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.repositoryKeyFile"></a>

```typescript
public readonly repositoryKeyFile: string;
```

- *Type:* `string`

The repositories cert key file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#repository_key_file DataHelmTemplate#repository_key_file}

---

##### `repositoryPassword`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.repositoryPassword"></a>

```typescript
public readonly repositoryPassword: string;
```

- *Type:* `string`

Password for HTTP basic authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#repository_password DataHelmTemplate#repository_password}

---

##### `repositoryUsername`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.repositoryUsername"></a>

```typescript
public readonly repositoryUsername: string;
```

- *Type:* `string`

Username for HTTP basic authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#repository_username DataHelmTemplate#repository_username}

---

##### `resetValues`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.resetValues"></a>

```typescript
public readonly resetValues: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

When upgrading, reset the values to the ones built into the chart.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#reset_values DataHelmTemplate#reset_values}

---

##### `reuseValues`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.reuseValues"></a>

```typescript
public readonly reuseValues: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#reuse_values DataHelmTemplate#reuse_values}

---

##### `set`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.set"></a>

```typescript
public readonly set: DataHelmTemplateSet[];
```

- *Type:* [`@cdktf/provider-helm.DataHelmTemplateSet`](#@cdktf/provider-helm.DataHelmTemplateSet)[]

set block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#set DataHelmTemplate#set}

---

##### `setSensitive`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.setSensitive"></a>

```typescript
public readonly setSensitive: DataHelmTemplateSetSensitive[];
```

- *Type:* [`@cdktf/provider-helm.DataHelmTemplateSetSensitive`](#@cdktf/provider-helm.DataHelmTemplateSetSensitive)[]

set_sensitive block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#set_sensitive DataHelmTemplate#set_sensitive}

---

##### `setString`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.setString"></a>

```typescript
public readonly setString: DataHelmTemplateSetString[];
```

- *Type:* [`@cdktf/provider-helm.DataHelmTemplateSetString`](#@cdktf/provider-helm.DataHelmTemplateSetString)[]

set_string block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#set_string DataHelmTemplate#set_string}

---

##### `showOnly`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.showOnly"></a>

```typescript
public readonly showOnly: string[];
```

- *Type:* `string`[]

Only show manifests rendered from the given templates.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#show_only DataHelmTemplate#show_only}

---

##### `skipCrds`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.skipCrds"></a>

```typescript
public readonly skipCrds: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

If set, no CRDs will be installed. By default, CRDs are installed if not already present.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#skip_crds DataHelmTemplate#skip_crds}

---

##### `skipTests`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.skipTests"></a>

```typescript
public readonly skipTests: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

If set, tests will not be rendered. By default, tests are rendered.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#skip_tests DataHelmTemplate#skip_tests}

---

##### `timeout`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* `number`

Time in seconds to wait for any individual kubernetes operation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#timeout DataHelmTemplate#timeout}

---

##### `validate`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.validate"></a>

```typescript
public readonly validate: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Validate your manifests against the Kubernetes cluster you are currently pointing at.

This is the same validation performed on an install

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#validate DataHelmTemplate#validate}

---

##### `values`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* `string`[]

List of values in raw yaml format to pass to helm.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#values DataHelmTemplate#values}

---

##### `verify`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.verify"></a>

```typescript
public readonly verify: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Verify the package before installing it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#verify DataHelmTemplate#verify}

---

##### `version`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* `string`

Specify the exact chart version to install. If this is not specified, the latest version is installed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#version DataHelmTemplate#version}

---

##### `wait`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.wait"></a>

```typescript
public readonly wait: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Will wait until all resources are in a ready state before marking the release as successful.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#wait DataHelmTemplate#wait}

---

### DataHelmTemplatePostrender <a name="@cdktf/provider-helm.DataHelmTemplatePostrender"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataHelmTemplatePostrender } from '@cdktf/provider-helm'

const dataHelmTemplatePostrender: DataHelmTemplatePostrender = { ... }
```

##### `binaryPath`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplatePostrender.property.binaryPath"></a>

```typescript
public readonly binaryPath: string;
```

- *Type:* `string`

The command binary path.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#binary_path DataHelmTemplate#binary_path}

---

### DataHelmTemplateSet <a name="@cdktf/provider-helm.DataHelmTemplateSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataHelmTemplateSet } from '@cdktf/provider-helm'

const dataHelmTemplateSet: DataHelmTemplateSet = { ... }
```

##### `name`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#name DataHelmTemplate#name}.

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSet.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#value DataHelmTemplate#value}.

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSet.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#type DataHelmTemplate#type}.

---

### DataHelmTemplateSetSensitive <a name="@cdktf/provider-helm.DataHelmTemplateSetSensitive"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataHelmTemplateSetSensitive } from '@cdktf/provider-helm'

const dataHelmTemplateSetSensitive: DataHelmTemplateSetSensitive = { ... }
```

##### `name`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetSensitive.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#name DataHelmTemplate#name}.

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetSensitive.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#value DataHelmTemplate#value}.

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetSensitive.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#type DataHelmTemplate#type}.

---

### DataHelmTemplateSetString <a name="@cdktf/provider-helm.DataHelmTemplateSetString"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataHelmTemplateSetString } from '@cdktf/provider-helm'

const dataHelmTemplateSetString: DataHelmTemplateSetString = { ... }
```

##### `name`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetString.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#name DataHelmTemplate#name}.

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetString.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#value DataHelmTemplate#value}.

---

### HelmProviderConfig <a name="@cdktf/provider-helm.HelmProviderConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { HelmProviderConfig } from '@cdktf/provider-helm'

const helmProviderConfig: HelmProviderConfig = { ... }
```

##### `alias`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* `string`

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#alias HelmProvider#alias}

---

##### `debug`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderConfig.property.debug"></a>

```typescript
public readonly debug: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Debug indicates whether or not Helm is running in Debug mode.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#debug HelmProvider#debug}

---

##### `experiments`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderConfig.property.experiments"></a>

```typescript
public readonly experiments: HelmProviderExperiments;
```

- *Type:* [`@cdktf/provider-helm.HelmProviderExperiments`](#@cdktf/provider-helm.HelmProviderExperiments)

experiments block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#experiments HelmProvider#experiments}

---

##### `helmDriver`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderConfig.property.helmDriver"></a>

```typescript
public readonly helmDriver: string;
```

- *Type:* `string`

The backend storage driver. Values are: configmap, secret, memory, sql.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#helm_driver HelmProvider#helm_driver}

---

##### `kubernetes`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderConfig.property.kubernetes"></a>

```typescript
public readonly kubernetes: HelmProviderKubernetes;
```

- *Type:* [`@cdktf/provider-helm.HelmProviderKubernetes`](#@cdktf/provider-helm.HelmProviderKubernetes)

kubernetes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#kubernetes HelmProvider#kubernetes}

---

##### `pluginsPath`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderConfig.property.pluginsPath"></a>

```typescript
public readonly pluginsPath: string;
```

- *Type:* `string`

The path to the helm plugins directory.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#plugins_path HelmProvider#plugins_path}

---

##### `registryConfigPath`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderConfig.property.registryConfigPath"></a>

```typescript
public readonly registryConfigPath: string;
```

- *Type:* `string`

The path to the registry config file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#registry_config_path HelmProvider#registry_config_path}

---

##### `repositoryCache`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderConfig.property.repositoryCache"></a>

```typescript
public readonly repositoryCache: string;
```

- *Type:* `string`

The path to the file containing cached repository indexes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#repository_cache HelmProvider#repository_cache}

---

##### `repositoryConfigPath`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderConfig.property.repositoryConfigPath"></a>

```typescript
public readonly repositoryConfigPath: string;
```

- *Type:* `string`

The path to the file containing repository names and URLs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#repository_config_path HelmProvider#repository_config_path}

---

### HelmProviderExperiments <a name="@cdktf/provider-helm.HelmProviderExperiments"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { HelmProviderExperiments } from '@cdktf/provider-helm'

const helmProviderExperiments: HelmProviderExperiments = { ... }
```

##### `manifest`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderExperiments.property.manifest"></a>

```typescript
public readonly manifest: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Enable full diff by storing the rendered manifest in the state.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#manifest HelmProvider#manifest}

---

### HelmProviderKubernetes <a name="@cdktf/provider-helm.HelmProviderKubernetes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { HelmProviderKubernetes } from '@cdktf/provider-helm'

const helmProviderKubernetes: HelmProviderKubernetes = { ... }
```

##### `clientCertificate`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetes.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* `string`

PEM-encoded client certificate for TLS authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#client_certificate HelmProvider#client_certificate}

---

##### `clientKey`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetes.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* `string`

PEM-encoded client certificate key for TLS authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#client_key HelmProvider#client_key}

---

##### `clusterCaCertificate`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetes.property.clusterCaCertificate"></a>

```typescript
public readonly clusterCaCertificate: string;
```

- *Type:* `string`

PEM-encoded root certificates bundle for TLS authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#cluster_ca_certificate HelmProvider#cluster_ca_certificate}

---

##### `configContext`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetes.property.configContext"></a>

```typescript
public readonly configContext: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#config_context HelmProvider#config_context}.

---

##### `configContextAuthInfo`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetes.property.configContextAuthInfo"></a>

```typescript
public readonly configContextAuthInfo: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#config_context_auth_info HelmProvider#config_context_auth_info}.

---

##### `configContextCluster`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetes.property.configContextCluster"></a>

```typescript
public readonly configContextCluster: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#config_context_cluster HelmProvider#config_context_cluster}.

---

##### `configPath`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetes.property.configPath"></a>

```typescript
public readonly configPath: string;
```

- *Type:* `string`

Path to the kube config file. Can be set with KUBE_CONFIG_PATH.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#config_path HelmProvider#config_path}

---

##### `configPaths`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetes.property.configPaths"></a>

```typescript
public readonly configPaths: string[];
```

- *Type:* `string`[]

A list of paths to kube config files. Can be set with KUBE_CONFIG_PATHS environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#config_paths HelmProvider#config_paths}

---

##### `exec`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetes.property.exec"></a>

```typescript
public readonly exec: HelmProviderKubernetesExec;
```

- *Type:* [`@cdktf/provider-helm.HelmProviderKubernetesExec`](#@cdktf/provider-helm.HelmProviderKubernetesExec)

exec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#exec HelmProvider#exec}

---

##### `host`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetes.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* `string`

The hostname (in form of URI) of Kubernetes master.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#host HelmProvider#host}

---

##### `insecure`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetes.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether server should be accessed without verifying the TLS certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#insecure HelmProvider#insecure}

---

##### `password`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetes.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* `string`

The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#password HelmProvider#password}

---

##### `token`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetes.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* `string`

Token to authenticate an service account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#token HelmProvider#token}

---

##### `username`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetes.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* `string`

The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#username HelmProvider#username}

---

### HelmProviderKubernetesExec <a name="@cdktf/provider-helm.HelmProviderKubernetesExec"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { HelmProviderKubernetesExec } from '@cdktf/provider-helm'

const helmProviderKubernetesExec: HelmProviderKubernetesExec = { ... }
```

##### `apiVersion`<sup>Required</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesExec.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#api_version HelmProvider#api_version}.

---

##### `command`<sup>Required</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesExec.property.command"></a>

```typescript
public readonly command: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#command HelmProvider#command}.

---

##### `args`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesExec.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#args HelmProvider#args}.

---

##### `env`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesExec.property.env"></a>

```typescript
public readonly env: IResolvable | {[ key: string ]: string};
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#env HelmProvider#env}.

---

### ReleaseConfig <a name="@cdktf/provider-helm.ReleaseConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ReleaseConfig } from '@cdktf/provider-helm'

const releaseConfig: ReleaseConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `chart`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.chart"></a>

```typescript
public readonly chart: string;
```

- *Type:* `string`

Chart name to be installed. A path may be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#chart Release#chart}

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Release name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#name Release#name}

---

##### `atomic`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.atomic"></a>

```typescript
public readonly atomic: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

If set, installation process purges chart on fail. The wait flag will be set automatically if atomic is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#atomic Release#atomic}

---

##### `cleanupOnFail`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.cleanupOnFail"></a>

```typescript
public readonly cleanupOnFail: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Allow deletion of new resources created in this upgrade when upgrade fails.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#cleanup_on_fail Release#cleanup_on_fail}

---

##### `createNamespace`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.createNamespace"></a>

```typescript
public readonly createNamespace: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Create the namespace if it does not exist.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#create_namespace Release#create_namespace}

---

##### `dependencyUpdate`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.dependencyUpdate"></a>

```typescript
public readonly dependencyUpdate: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Run helm dependency update before installing the chart.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#dependency_update Release#dependency_update}

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

Add a custom description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#description Release#description}

---

##### `devel`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.devel"></a>

```typescript
public readonly devel: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#devel Release#devel}

---

##### `disableCrdHooks`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.disableCrdHooks"></a>

```typescript
public readonly disableCrdHooks: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Prevent CRD hooks from, running, but run other hooks.  See helm install --no-crd-hook.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#disable_crd_hooks Release#disable_crd_hooks}

---

##### `disableOpenapiValidation`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.disableOpenapiValidation"></a>

```typescript
public readonly disableOpenapiValidation: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#disable_openapi_validation Release#disable_openapi_validation}

---

##### `disableWebhooks`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.disableWebhooks"></a>

```typescript
public readonly disableWebhooks: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Prevent hooks from running.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#disable_webhooks Release#disable_webhooks}

---

##### `forceUpdate`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.forceUpdate"></a>

```typescript
public readonly forceUpdate: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Force resource update through delete/recreate if needed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#force_update Release#force_update}

---

##### `keyring`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.keyring"></a>

```typescript
public readonly keyring: string;
```

- *Type:* `string`

Location of public keys used for verification. Used only if `verify` is true.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#keyring Release#keyring}

---

##### `lint`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.lint"></a>

```typescript
public readonly lint: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Run helm lint when planning.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#lint Release#lint}

---

##### `maxHistory`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.maxHistory"></a>

```typescript
public readonly maxHistory: number;
```

- *Type:* `number`

Limit the maximum number of revisions saved per release. Use 0 for no limit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#max_history Release#max_history}

---

##### `namespace`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* `string`

Namespace to install the release into.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#namespace Release#namespace}

---

##### `postrender`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.postrender"></a>

```typescript
public readonly postrender: ReleasePostrender;
```

- *Type:* [`@cdktf/provider-helm.ReleasePostrender`](#@cdktf/provider-helm.ReleasePostrender)

postrender block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#postrender Release#postrender}

---

##### `recreatePods`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.recreatePods"></a>

```typescript
public readonly recreatePods: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Perform pods restart during upgrade/rollback.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#recreate_pods Release#recreate_pods}

---

##### `renderSubchartNotes`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.renderSubchartNotes"></a>

```typescript
public readonly renderSubchartNotes: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

If set, render subchart notes along with the parent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#render_subchart_notes Release#render_subchart_notes}

---

##### `replace`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.replace"></a>

```typescript
public readonly replace: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Re-use the given name, even if that name is already used. This is unsafe in production.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#replace Release#replace}

---

##### `repository`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* `string`

Repository where to locate the requested chart. If is a URL the chart is installed without installing the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#repository Release#repository}

---

##### `repositoryCaFile`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.repositoryCaFile"></a>

```typescript
public readonly repositoryCaFile: string;
```

- *Type:* `string`

The Repositories CA File.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#repository_ca_file Release#repository_ca_file}

---

##### `repositoryCertFile`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.repositoryCertFile"></a>

```typescript
public readonly repositoryCertFile: string;
```

- *Type:* `string`

The repositories cert file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#repository_cert_file Release#repository_cert_file}

---

##### `repositoryKeyFile`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.repositoryKeyFile"></a>

```typescript
public readonly repositoryKeyFile: string;
```

- *Type:* `string`

The repositories cert key file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#repository_key_file Release#repository_key_file}

---

##### `repositoryPassword`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.repositoryPassword"></a>

```typescript
public readonly repositoryPassword: string;
```

- *Type:* `string`

Password for HTTP basic authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#repository_password Release#repository_password}

---

##### `repositoryUsername`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.repositoryUsername"></a>

```typescript
public readonly repositoryUsername: string;
```

- *Type:* `string`

Username for HTTP basic authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#repository_username Release#repository_username}

---

##### `resetValues`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.resetValues"></a>

```typescript
public readonly resetValues: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

When upgrading, reset the values to the ones built into the chart.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#reset_values Release#reset_values}

---

##### `reuseValues`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.reuseValues"></a>

```typescript
public readonly reuseValues: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#reuse_values Release#reuse_values}

---

##### `set`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.set"></a>

```typescript
public readonly set: ReleaseSet[];
```

- *Type:* [`@cdktf/provider-helm.ReleaseSet`](#@cdktf/provider-helm.ReleaseSet)[]

set block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#set Release#set}

---

##### `setSensitive`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.setSensitive"></a>

```typescript
public readonly setSensitive: ReleaseSetSensitive[];
```

- *Type:* [`@cdktf/provider-helm.ReleaseSetSensitive`](#@cdktf/provider-helm.ReleaseSetSensitive)[]

set_sensitive block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#set_sensitive Release#set_sensitive}

---

##### `skipCrds`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.skipCrds"></a>

```typescript
public readonly skipCrds: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

If set, no CRDs will be installed. By default, CRDs are installed if not already present.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#skip_crds Release#skip_crds}

---

##### `timeout`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* `number`

Time in seconds to wait for any individual kubernetes operation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#timeout Release#timeout}

---

##### `values`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* `string`[]

List of values in raw yaml format to pass to helm.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#values Release#values}

---

##### `verify`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.verify"></a>

```typescript
public readonly verify: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Verify the package before installing it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#verify Release#verify}

---

##### `version`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* `string`

Specify the exact chart version to install. If this is not specified, the latest version is installed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#version Release#version}

---

##### `wait`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.wait"></a>

```typescript
public readonly wait: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Will wait until all resources are in a ready state before marking the release as successful.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#wait Release#wait}

---

##### `waitForJobs`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.waitForJobs"></a>

```typescript
public readonly waitForJobs: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

If wait is enabled, will wait until all Jobs have been completed before marking the release as successful.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#wait_for_jobs Release#wait_for_jobs}

---

### ReleasePostrender <a name="@cdktf/provider-helm.ReleasePostrender"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ReleasePostrender } from '@cdktf/provider-helm'

const releasePostrender: ReleasePostrender = { ... }
```

##### `binaryPath`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleasePostrender.property.binaryPath"></a>

```typescript
public readonly binaryPath: string;
```

- *Type:* `string`

The command binary path.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#binary_path Release#binary_path}

---

### ReleaseSet <a name="@cdktf/provider-helm.ReleaseSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ReleaseSet } from '@cdktf/provider-helm'

const releaseSet: ReleaseSet = { ... }
```

##### `name`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#name Release#name}.

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseSet.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#value Release#value}.

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseSet.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#type Release#type}.

---

### ReleaseSetSensitive <a name="@cdktf/provider-helm.ReleaseSetSensitive"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ReleaseSetSensitive } from '@cdktf/provider-helm'

const releaseSetSensitive: ReleaseSetSensitive = { ... }
```

##### `name`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseSetSensitive.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#name Release#name}.

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseSetSensitive.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#value Release#value}.

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseSetSensitive.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#type Release#type}.

---

## Classes <a name="Classes"></a>

### DataHelmTemplatePostrenderOutputReference <a name="@cdktf/provider-helm.DataHelmTemplatePostrenderOutputReference"></a>

#### Initializers <a name="@cdktf/provider-helm.DataHelmTemplatePostrenderOutputReference.Initializer"></a>

```typescript
import { DataHelmTemplatePostrenderOutputReference } from '@cdktf/provider-helm'

new DataHelmTemplatePostrenderOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplatePostrenderOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplatePostrenderOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplatePostrenderOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---



#### Properties <a name="Properties"></a>

##### `binaryPathInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplatePostrenderOutputReference.property.binaryPathInput"></a>

```typescript
public readonly binaryPathInput: string;
```

- *Type:* `string`

---

##### `binaryPath`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplatePostrenderOutputReference.property.binaryPath"></a>

```typescript
public readonly binaryPath: string;
```

- *Type:* `string`

---


### HelmProviderExperimentsOutputReference <a name="@cdktf/provider-helm.HelmProviderExperimentsOutputReference"></a>

#### Initializers <a name="@cdktf/provider-helm.HelmProviderExperimentsOutputReference.Initializer"></a>

```typescript
import { HelmProviderExperimentsOutputReference } from '@cdktf/provider-helm'

new HelmProviderExperimentsOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-helm.HelmProviderExperimentsOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-helm.HelmProviderExperimentsOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-helm.HelmProviderExperimentsOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods"></a>

##### `resetManifest` <a name="@cdktf/provider-helm.HelmProviderExperimentsOutputReference.resetManifest"></a>

```typescript
public resetManifest()
```


#### Properties <a name="Properties"></a>

##### `manifestInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderExperimentsOutputReference.property.manifestInput"></a>

```typescript
public readonly manifestInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `manifest`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderExperimentsOutputReference.property.manifest"></a>

```typescript
public readonly manifest: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---


### HelmProviderKubernetesExecOutputReference <a name="@cdktf/provider-helm.HelmProviderKubernetesExecOutputReference"></a>

#### Initializers <a name="@cdktf/provider-helm.HelmProviderKubernetesExecOutputReference.Initializer"></a>

```typescript
import { HelmProviderKubernetesExecOutputReference } from '@cdktf/provider-helm'

new HelmProviderKubernetesExecOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesExecOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesExecOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesExecOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods"></a>

##### `resetArgs` <a name="@cdktf/provider-helm.HelmProviderKubernetesExecOutputReference.resetArgs"></a>

```typescript
public resetArgs()
```

##### `resetEnv` <a name="@cdktf/provider-helm.HelmProviderKubernetesExecOutputReference.resetEnv"></a>

```typescript
public resetEnv()
```


#### Properties <a name="Properties"></a>

##### `apiVersionInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesExecOutputReference.property.apiVersionInput"></a>

```typescript
public readonly apiVersionInput: string;
```

- *Type:* `string`

---

##### `argsInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesExecOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: string[];
```

- *Type:* `string`[]

---

##### `commandInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesExecOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string;
```

- *Type:* `string`

---

##### `envInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesExecOutputReference.property.envInput"></a>

```typescript
public readonly envInput: IResolvable | {[ key: string ]: string};
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

---

##### `apiVersion`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesExecOutputReference.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* `string`

---

##### `args`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesExecOutputReference.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* `string`[]

---

##### `command`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesExecOutputReference.property.command"></a>

```typescript
public readonly command: string;
```

- *Type:* `string`

---

##### `env`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesExecOutputReference.property.env"></a>

```typescript
public readonly env: IResolvable | {[ key: string ]: string};
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

---


### HelmProviderKubernetesOutputReference <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference"></a>

#### Initializers <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.Initializer"></a>

```typescript
import { HelmProviderKubernetesOutputReference } from '@cdktf/provider-helm'

new HelmProviderKubernetesOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods"></a>

##### `resetClientCertificate` <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.resetClientCertificate"></a>

```typescript
public resetClientCertificate()
```

##### `resetClientKey` <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.resetClientKey"></a>

```typescript
public resetClientKey()
```

##### `resetClusterCaCertificate` <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.resetClusterCaCertificate"></a>

```typescript
public resetClusterCaCertificate()
```

##### `resetConfigContext` <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.resetConfigContext"></a>

```typescript
public resetConfigContext()
```

##### `resetConfigContextAuthInfo` <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.resetConfigContextAuthInfo"></a>

```typescript
public resetConfigContextAuthInfo()
```

##### `resetConfigContextCluster` <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.resetConfigContextCluster"></a>

```typescript
public resetConfigContextCluster()
```

##### `resetConfigPath` <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.resetConfigPath"></a>

```typescript
public resetConfigPath()
```

##### `resetConfigPaths` <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.resetConfigPaths"></a>

```typescript
public resetConfigPaths()
```

##### `resetExec` <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.resetExec"></a>

```typescript
public resetExec()
```

##### `resetHost` <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.resetHost"></a>

```typescript
public resetHost()
```

##### `resetInsecure` <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.resetInsecure"></a>

```typescript
public resetInsecure()
```

##### `resetPassword` <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.resetPassword"></a>

```typescript
public resetPassword()
```

##### `resetToken` <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.resetToken"></a>

```typescript
public resetToken()
```

##### `resetUsername` <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.resetUsername"></a>

```typescript
public resetUsername()
```


#### Properties <a name="Properties"></a>

##### `clientCertificateInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.property.clientCertificateInput"></a>

```typescript
public readonly clientCertificateInput: string;
```

- *Type:* `string`

---

##### `clientKeyInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.property.clientKeyInput"></a>

```typescript
public readonly clientKeyInput: string;
```

- *Type:* `string`

---

##### `clusterCaCertificateInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.property.clusterCaCertificateInput"></a>

```typescript
public readonly clusterCaCertificateInput: string;
```

- *Type:* `string`

---

##### `configContextAuthInfoInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.property.configContextAuthInfoInput"></a>

```typescript
public readonly configContextAuthInfoInput: string;
```

- *Type:* `string`

---

##### `configContextClusterInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.property.configContextClusterInput"></a>

```typescript
public readonly configContextClusterInput: string;
```

- *Type:* `string`

---

##### `configContextInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.property.configContextInput"></a>

```typescript
public readonly configContextInput: string;
```

- *Type:* `string`

---

##### `configPathInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.property.configPathInput"></a>

```typescript
public readonly configPathInput: string;
```

- *Type:* `string`

---

##### `configPathsInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.property.configPathsInput"></a>

```typescript
public readonly configPathsInput: string[];
```

- *Type:* `string`[]

---

##### `execInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.property.execInput"></a>

```typescript
public readonly execInput: HelmProviderKubernetesExec;
```

- *Type:* [`@cdktf/provider-helm.HelmProviderKubernetesExec`](#@cdktf/provider-helm.HelmProviderKubernetesExec)

---

##### `hostInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* `string`

---

##### `insecureInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.property.insecureInput"></a>

```typescript
public readonly insecureInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `passwordInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* `string`

---

##### `tokenInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* `string`

---

##### `usernameInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* `string`

---

##### `clientCertificate`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* `string`

---

##### `clientKey`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* `string`

---

##### `clusterCaCertificate`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.property.clusterCaCertificate"></a>

```typescript
public readonly clusterCaCertificate: string;
```

- *Type:* `string`

---

##### `configContext`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.property.configContext"></a>

```typescript
public readonly configContext: string;
```

- *Type:* `string`

---

##### `configContextAuthInfo`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.property.configContextAuthInfo"></a>

```typescript
public readonly configContextAuthInfo: string;
```

- *Type:* `string`

---

##### `configContextCluster`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.property.configContextCluster"></a>

```typescript
public readonly configContextCluster: string;
```

- *Type:* `string`

---

##### `configPath`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.property.configPath"></a>

```typescript
public readonly configPath: string;
```

- *Type:* `string`

---

##### `configPaths`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.property.configPaths"></a>

```typescript
public readonly configPaths: string[];
```

- *Type:* `string`[]

---

##### `exec`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.property.exec"></a>

```typescript
public readonly exec: HelmProviderKubernetesExec;
```

- *Type:* [`@cdktf/provider-helm.HelmProviderKubernetesExec`](#@cdktf/provider-helm.HelmProviderKubernetesExec)

---

##### `host`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* `string`

---

##### `insecure`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `password`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* `string`

---

##### `token`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* `string`

---

##### `username`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetesOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* `string`

---


### ReleaseMetadata <a name="@cdktf/provider-helm.ReleaseMetadata"></a>

#### Initializers <a name="@cdktf/provider-helm.ReleaseMetadata.Initializer"></a>

```typescript
import { ReleaseMetadata } from '@cdktf/provider-helm'

new ReleaseMetadata(terraformResource: ITerraformResource, terraformAttribute: string, complexComputedListIndex: string)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseMetadata.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseMetadata.parameter.terraformAttribute"></a>

- *Type:* `string`

---

##### `complexComputedListIndex`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseMetadata.parameter.complexComputedListIndex"></a>

- *Type:* `string`

---



#### Properties <a name="Properties"></a>

##### `appVersion`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseMetadata.property.appVersion"></a>

```typescript
public readonly appVersion: string;
```

- *Type:* `string`

---

##### `chart`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseMetadata.property.chart"></a>

```typescript
public readonly chart: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseMetadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseMetadata.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* `string`

---

##### `revision`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseMetadata.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* `number`

---

##### `values`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseMetadata.property.values"></a>

```typescript
public readonly values: string;
```

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseMetadata.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* `string`

---


### ReleasePostrenderOutputReference <a name="@cdktf/provider-helm.ReleasePostrenderOutputReference"></a>

#### Initializers <a name="@cdktf/provider-helm.ReleasePostrenderOutputReference.Initializer"></a>

```typescript
import { ReleasePostrenderOutputReference } from '@cdktf/provider-helm'

new ReleasePostrenderOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleasePostrenderOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleasePostrenderOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleasePostrenderOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---



#### Properties <a name="Properties"></a>

##### `binaryPathInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleasePostrenderOutputReference.property.binaryPathInput"></a>

```typescript
public readonly binaryPathInput: string;
```

- *Type:* `string`

---

##### `binaryPath`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleasePostrenderOutputReference.property.binaryPath"></a>

```typescript
public readonly binaryPath: string;
```

- *Type:* `string`

---



