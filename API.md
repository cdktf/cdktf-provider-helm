# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### DataHelmTemplate <a name="@cdktf/provider-helm.DataHelmTemplate"></a>

Represents a {@link https://www.terraform.io/docs/providers/helm/d/template helm_template}.

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
public putPostrender(value: DataHelmTemplatePostrender)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.parameter.value"></a>

- *Type:* [`@cdktf/provider-helm.DataHelmTemplatePostrender`](#@cdktf/provider-helm.DataHelmTemplatePostrender)

---

##### `putSet` <a name="@cdktf/provider-helm.DataHelmTemplate.putSet"></a>

```typescript
public putSet(value: IResolvable | DataHelmTemplateSet[])
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.parameter.value"></a>

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-helm.DataHelmTemplateSet`](#@cdktf/provider-helm.DataHelmTemplateSet)[]

---

##### `putSetSensitive` <a name="@cdktf/provider-helm.DataHelmTemplate.putSetSensitive"></a>

```typescript
public putSetSensitive(value: IResolvable | DataHelmTemplateSetSensitive[])
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.parameter.value"></a>

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-helm.DataHelmTemplateSetSensitive`](#@cdktf/provider-helm.DataHelmTemplateSetSensitive)[]

---

##### `putSetString` <a name="@cdktf/provider-helm.DataHelmTemplate.putSetString"></a>

```typescript
public putSetString(value: IResolvable | DataHelmTemplateSetString[])
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.parameter.value"></a>

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-helm.DataHelmTemplateSetString`](#@cdktf/provider-helm.DataHelmTemplateSetString)[]

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

##### `resetId` <a name="@cdktf/provider-helm.DataHelmTemplate.resetId"></a>

```typescript
public resetId()
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

##### `resetPassCredentials` <a name="@cdktf/provider-helm.DataHelmTemplate.resetPassCredentials"></a>

```typescript
public resetPassCredentials()
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

##### `postrender`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.postrender"></a>

```typescript
public readonly postrender: DataHelmTemplatePostrenderOutputReference;
```

- *Type:* [`@cdktf/provider-helm.DataHelmTemplatePostrenderOutputReference`](#@cdktf/provider-helm.DataHelmTemplatePostrenderOutputReference)

---

##### `set`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.set"></a>

```typescript
public readonly set: DataHelmTemplateSetList;
```

- *Type:* [`@cdktf/provider-helm.DataHelmTemplateSetList`](#@cdktf/provider-helm.DataHelmTemplateSetList)

---

##### `setSensitive`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.setSensitive"></a>

```typescript
public readonly setSensitive: DataHelmTemplateSetSensitiveList;
```

- *Type:* [`@cdktf/provider-helm.DataHelmTemplateSetSensitiveList`](#@cdktf/provider-helm.DataHelmTemplateSetSensitiveList)

---

##### `setString`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.setString"></a>

```typescript
public readonly setString: DataHelmTemplateSetStringList;
```

- *Type:* [`@cdktf/provider-helm.DataHelmTemplateSetStringList`](#@cdktf/provider-helm.DataHelmTemplateSetStringList)

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

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

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
public readonly manifestsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

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

##### `passCredentialsInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.passCredentialsInput"></a>

```typescript
public readonly passCredentialsInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

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
public readonly setInput: IResolvable | DataHelmTemplateSet[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-helm.DataHelmTemplateSet`](#@cdktf/provider-helm.DataHelmTemplateSet)[]

---

##### `setSensitiveInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.setSensitiveInput"></a>

```typescript
public readonly setSensitiveInput: IResolvable | DataHelmTemplateSetSensitive[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-helm.DataHelmTemplateSetSensitive`](#@cdktf/provider-helm.DataHelmTemplateSetSensitive)[]

---

##### `setStringInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.setStringInput"></a>

```typescript
public readonly setStringInput: IResolvable | DataHelmTemplateSetString[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-helm.DataHelmTemplateSetString`](#@cdktf/provider-helm.DataHelmTemplateSetString)[]

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

##### `apiVersions`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.apiVersions"></a>

```typescript
public readonly apiVersions: string[];
```

- *Type:* `string`[]

---

##### `atomic`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.atomic"></a>

```typescript
public readonly atomic: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `chart`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.chart"></a>

```typescript
public readonly chart: string;
```

- *Type:* `string`

---

##### `createNamespace`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.createNamespace"></a>

```typescript
public readonly createNamespace: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependencyUpdate`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.dependencyUpdate"></a>

```typescript
public readonly dependencyUpdate: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `description`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `devel`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.devel"></a>

```typescript
public readonly devel: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `disableOpenapiValidation`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.disableOpenapiValidation"></a>

```typescript
public readonly disableOpenapiValidation: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `disableWebhooks`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.disableWebhooks"></a>

```typescript
public readonly disableWebhooks: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `includeCrds`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.includeCrds"></a>

```typescript
public readonly includeCrds: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `isUpgrade`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.isUpgrade"></a>

```typescript
public readonly isUpgrade: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `keyring`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.keyring"></a>

```typescript
public readonly keyring: string;
```

- *Type:* `string`

---

##### `manifest`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.manifest"></a>

```typescript
public readonly manifest: string;
```

- *Type:* `string`

---

##### `manifests`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.manifests"></a>

```typescript
public readonly manifests: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* `string`

---

##### `notes`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* `string`

---

##### `passCredentials`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.passCredentials"></a>

```typescript
public readonly passCredentials: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `renderSubchartNotes`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.renderSubchartNotes"></a>

```typescript
public readonly renderSubchartNotes: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `replace`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.replace"></a>

```typescript
public readonly replace: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `repository`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* `string`

---

##### `repositoryCaFile`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.repositoryCaFile"></a>

```typescript
public readonly repositoryCaFile: string;
```

- *Type:* `string`

---

##### `repositoryCertFile`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.repositoryCertFile"></a>

```typescript
public readonly repositoryCertFile: string;
```

- *Type:* `string`

---

##### `repositoryKeyFile`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.repositoryKeyFile"></a>

```typescript
public readonly repositoryKeyFile: string;
```

- *Type:* `string`

---

##### `repositoryPassword`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.repositoryPassword"></a>

```typescript
public readonly repositoryPassword: string;
```

- *Type:* `string`

---

##### `repositoryUsername`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.repositoryUsername"></a>

```typescript
public readonly repositoryUsername: string;
```

- *Type:* `string`

---

##### `resetValues`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.resetValues"></a>

```typescript
public readonly resetValues: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `reuseValues`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.reuseValues"></a>

```typescript
public readonly reuseValues: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `showOnly`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.showOnly"></a>

```typescript
public readonly showOnly: string[];
```

- *Type:* `string`[]

---

##### `skipCrds`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.skipCrds"></a>

```typescript
public readonly skipCrds: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `skipTests`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.skipTests"></a>

```typescript
public readonly skipTests: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `timeout`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* `number`

---

##### `validate`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.validate"></a>

```typescript
public readonly validate: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `values`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* `string`[]

---

##### `verify`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.verify"></a>

```typescript
public readonly verify: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `version`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* `string`

---

##### `wait`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplate.property.wait"></a>

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

Represents a {@link https://www.terraform.io/docs/providers/helm/r/release helm_release}.

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

##### `putPostrender` <a name="@cdktf/provider-helm.Release.putPostrender"></a>

```typescript
public putPostrender(value: ReleasePostrender)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.parameter.value"></a>

- *Type:* [`@cdktf/provider-helm.ReleasePostrender`](#@cdktf/provider-helm.ReleasePostrender)

---

##### `putSet` <a name="@cdktf/provider-helm.Release.putSet"></a>

```typescript
public putSet(value: IResolvable | ReleaseSet[])
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.parameter.value"></a>

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-helm.ReleaseSet`](#@cdktf/provider-helm.ReleaseSet)[]

---

##### `putSetSensitive` <a name="@cdktf/provider-helm.Release.putSetSensitive"></a>

```typescript
public putSetSensitive(value: IResolvable | ReleaseSetSensitive[])
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.parameter.value"></a>

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-helm.ReleaseSetSensitive`](#@cdktf/provider-helm.ReleaseSetSensitive)[]

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

##### `resetId` <a name="@cdktf/provider-helm.Release.resetId"></a>

```typescript
public resetId()
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

##### `resetPassCredentials` <a name="@cdktf/provider-helm.Release.resetPassCredentials"></a>

```typescript
public resetPassCredentials()
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

##### `manifest`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.manifest"></a>

```typescript
public readonly manifest: string;
```

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.metadata"></a>

```typescript
public readonly metadata: ReleaseMetadataList;
```

- *Type:* [`@cdktf/provider-helm.ReleaseMetadataList`](#@cdktf/provider-helm.ReleaseMetadataList)

---

##### `postrender`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.postrender"></a>

```typescript
public readonly postrender: ReleasePostrenderOutputReference;
```

- *Type:* [`@cdktf/provider-helm.ReleasePostrenderOutputReference`](#@cdktf/provider-helm.ReleasePostrenderOutputReference)

---

##### `set`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.set"></a>

```typescript
public readonly set: ReleaseSetList;
```

- *Type:* [`@cdktf/provider-helm.ReleaseSetList`](#@cdktf/provider-helm.ReleaseSetList)

---

##### `setSensitive`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.setSensitive"></a>

```typescript
public readonly setSensitive: ReleaseSetSensitiveList;
```

- *Type:* [`@cdktf/provider-helm.ReleaseSetSensitiveList`](#@cdktf/provider-helm.ReleaseSetSensitiveList)

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

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

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

##### `passCredentialsInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.passCredentialsInput"></a>

```typescript
public readonly passCredentialsInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

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
public readonly setInput: IResolvable | ReleaseSet[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-helm.ReleaseSet`](#@cdktf/provider-helm.ReleaseSet)[]

---

##### `setSensitiveInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.Release.property.setSensitiveInput"></a>

```typescript
public readonly setSensitiveInput: IResolvable | ReleaseSetSensitive[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-helm.ReleaseSetSensitive`](#@cdktf/provider-helm.ReleaseSetSensitive)[]

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

##### `atomic`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.atomic"></a>

```typescript
public readonly atomic: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `chart`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.chart"></a>

```typescript
public readonly chart: string;
```

- *Type:* `string`

---

##### `cleanupOnFail`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.cleanupOnFail"></a>

```typescript
public readonly cleanupOnFail: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `createNamespace`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.createNamespace"></a>

```typescript
public readonly createNamespace: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependencyUpdate`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.dependencyUpdate"></a>

```typescript
public readonly dependencyUpdate: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `description`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `devel`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.devel"></a>

```typescript
public readonly devel: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `disableCrdHooks`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.disableCrdHooks"></a>

```typescript
public readonly disableCrdHooks: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `disableOpenapiValidation`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.disableOpenapiValidation"></a>

```typescript
public readonly disableOpenapiValidation: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `disableWebhooks`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.disableWebhooks"></a>

```typescript
public readonly disableWebhooks: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `forceUpdate`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.forceUpdate"></a>

```typescript
public readonly forceUpdate: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `keyring`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.keyring"></a>

```typescript
public readonly keyring: string;
```

- *Type:* `string`

---

##### `lint`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.lint"></a>

```typescript
public readonly lint: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `maxHistory`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.maxHistory"></a>

```typescript
public readonly maxHistory: number;
```

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* `string`

---

##### `passCredentials`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.passCredentials"></a>

```typescript
public readonly passCredentials: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `recreatePods`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.recreatePods"></a>

```typescript
public readonly recreatePods: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `renderSubchartNotes`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.renderSubchartNotes"></a>

```typescript
public readonly renderSubchartNotes: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `replace`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.replace"></a>

```typescript
public readonly replace: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `repository`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* `string`

---

##### `repositoryCaFile`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.repositoryCaFile"></a>

```typescript
public readonly repositoryCaFile: string;
```

- *Type:* `string`

---

##### `repositoryCertFile`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.repositoryCertFile"></a>

```typescript
public readonly repositoryCertFile: string;
```

- *Type:* `string`

---

##### `repositoryKeyFile`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.repositoryKeyFile"></a>

```typescript
public readonly repositoryKeyFile: string;
```

- *Type:* `string`

---

##### `repositoryPassword`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.repositoryPassword"></a>

```typescript
public readonly repositoryPassword: string;
```

- *Type:* `string`

---

##### `repositoryUsername`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.repositoryUsername"></a>

```typescript
public readonly repositoryUsername: string;
```

- *Type:* `string`

---

##### `resetValues`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.resetValues"></a>

```typescript
public readonly resetValues: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `reuseValues`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.reuseValues"></a>

```typescript
public readonly reuseValues: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `skipCrds`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.skipCrds"></a>

```typescript
public readonly skipCrds: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `timeout`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* `number`

---

##### `values`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* `string`[]

---

##### `verify`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.verify"></a>

```typescript
public readonly verify: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `version`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* `string`

---

##### `wait`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.wait"></a>

```typescript
public readonly wait: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `waitForJobs`<sup>Required</sup> <a name="@cdktf/provider-helm.Release.property.waitForJobs"></a>

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

##### `connection`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.connection"></a>

```typescript
public readonly connection: ISSHProvisionerConnection | IWinrmProvisionerConnection;
```

- *Type:* [`cdktf.ISSHProvisionerConnection`](#cdktf.ISSHProvisionerConnection) | [`cdktf.IWinrmProvisionerConnection`](#cdktf.IWinrmProvisionerConnection)

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `forEach`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* [`cdktf.ITerraformIterator`](#cdktf.ITerraformIterator)

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

##### `provisioners`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: IFileProvisioner | ILocalExecProvisioner | IRemoteExecProvisioner[];
```

- *Type:* [`cdktf.IFileProvisioner`](#cdktf.IFileProvisioner) | [`cdktf.ILocalExecProvisioner`](#cdktf.ILocalExecProvisioner) | [`cdktf.IRemoteExecProvisioner`](#cdktf.IRemoteExecProvisioner)[]

---

##### `chart`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.chart"></a>

```typescript
public readonly chart: string;
```

- *Type:* `string`

Chart name to be installed. A path may be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#chart DataHelmTemplate#chart}

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Release name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#name DataHelmTemplate#name}

---

##### `apiVersions`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.apiVersions"></a>

```typescript
public readonly apiVersions: string[];
```

- *Type:* `string`[]

Kubernetes api versions used for Capabilities.APIVersions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#api_versions DataHelmTemplate#api_versions}

---

##### `atomic`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.atomic"></a>

```typescript
public readonly atomic: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

If set, installation process purges chart on fail. The wait flag will be set automatically if atomic is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#atomic DataHelmTemplate#atomic}

---

##### `createNamespace`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.createNamespace"></a>

```typescript
public readonly createNamespace: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Create the namespace if it does not exist.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#create_namespace DataHelmTemplate#create_namespace}

---

##### `dependencyUpdate`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.dependencyUpdate"></a>

```typescript
public readonly dependencyUpdate: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Run helm dependency update before installing the chart.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#dependency_update DataHelmTemplate#dependency_update}

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

Add a custom description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#description DataHelmTemplate#description}

---

##### `devel`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.devel"></a>

```typescript
public readonly devel: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#devel DataHelmTemplate#devel}

---

##### `disableOpenapiValidation`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.disableOpenapiValidation"></a>

```typescript
public readonly disableOpenapiValidation: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#disable_openapi_validation DataHelmTemplate#disable_openapi_validation}

---

##### `disableWebhooks`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.disableWebhooks"></a>

```typescript
public readonly disableWebhooks: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Prevent hooks from running.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#disable_webhooks DataHelmTemplate#disable_webhooks}

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#id DataHelmTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeCrds`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.includeCrds"></a>

```typescript
public readonly includeCrds: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Include CRDs in the templated output.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#include_crds DataHelmTemplate#include_crds}

---

##### `isUpgrade`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.isUpgrade"></a>

```typescript
public readonly isUpgrade: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Set .Release.IsUpgrade instead of .Release.IsInstall.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#is_upgrade DataHelmTemplate#is_upgrade}

---

##### `keyring`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.keyring"></a>

```typescript
public readonly keyring: string;
```

- *Type:* `string`

Location of public keys used for verification. Used only if `verify` is true.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#keyring DataHelmTemplate#keyring}

---

##### `manifest`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.manifest"></a>

```typescript
public readonly manifest: string;
```

- *Type:* `string`

Concatenated rendered chart templates. This corresponds to the output of the `helm template` command.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#manifest DataHelmTemplate#manifest}

---

##### `manifests`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.manifests"></a>

```typescript
public readonly manifests: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

Map of rendered chart templates indexed by the template name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#manifests DataHelmTemplate#manifests}

---

##### `namespace`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* `string`

Namespace to install the release into.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#namespace DataHelmTemplate#namespace}

---

##### `notes`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* `string`

Rendered notes if the chart contains a `NOTES.txt`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#notes DataHelmTemplate#notes}

---

##### `passCredentials`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.passCredentials"></a>

```typescript
public readonly passCredentials: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Pass credentials to all domains.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#pass_credentials DataHelmTemplate#pass_credentials}

---

##### `postrender`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.postrender"></a>

```typescript
public readonly postrender: DataHelmTemplatePostrender;
```

- *Type:* [`@cdktf/provider-helm.DataHelmTemplatePostrender`](#@cdktf/provider-helm.DataHelmTemplatePostrender)

postrender block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#postrender DataHelmTemplate#postrender}

---

##### `renderSubchartNotes`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.renderSubchartNotes"></a>

```typescript
public readonly renderSubchartNotes: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

If set, render subchart notes along with the parent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#render_subchart_notes DataHelmTemplate#render_subchart_notes}

---

##### `replace`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.replace"></a>

```typescript
public readonly replace: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Re-use the given name, even if that name is already used. This is unsafe in production.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#replace DataHelmTemplate#replace}

---

##### `repository`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* `string`

Repository where to locate the requested chart. If is a URL the chart is installed without installing the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#repository DataHelmTemplate#repository}

---

##### `repositoryCaFile`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.repositoryCaFile"></a>

```typescript
public readonly repositoryCaFile: string;
```

- *Type:* `string`

The Repositories CA File.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#repository_ca_file DataHelmTemplate#repository_ca_file}

---

##### `repositoryCertFile`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.repositoryCertFile"></a>

```typescript
public readonly repositoryCertFile: string;
```

- *Type:* `string`

The repositories cert file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#repository_cert_file DataHelmTemplate#repository_cert_file}

---

##### `repositoryKeyFile`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.repositoryKeyFile"></a>

```typescript
public readonly repositoryKeyFile: string;
```

- *Type:* `string`

The repositories cert key file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#repository_key_file DataHelmTemplate#repository_key_file}

---

##### `repositoryPassword`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.repositoryPassword"></a>

```typescript
public readonly repositoryPassword: string;
```

- *Type:* `string`

Password for HTTP basic authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#repository_password DataHelmTemplate#repository_password}

---

##### `repositoryUsername`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.repositoryUsername"></a>

```typescript
public readonly repositoryUsername: string;
```

- *Type:* `string`

Username for HTTP basic authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#repository_username DataHelmTemplate#repository_username}

---

##### `resetValues`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.resetValues"></a>

```typescript
public readonly resetValues: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

When upgrading, reset the values to the ones built into the chart.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#reset_values DataHelmTemplate#reset_values}

---

##### `reuseValues`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.reuseValues"></a>

```typescript
public readonly reuseValues: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#reuse_values DataHelmTemplate#reuse_values}

---

##### `set`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.set"></a>

```typescript
public readonly set: IResolvable | DataHelmTemplateSet[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-helm.DataHelmTemplateSet`](#@cdktf/provider-helm.DataHelmTemplateSet)[]

set block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#set DataHelmTemplate#set}

---

##### `setSensitive`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.setSensitive"></a>

```typescript
public readonly setSensitive: IResolvable | DataHelmTemplateSetSensitive[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-helm.DataHelmTemplateSetSensitive`](#@cdktf/provider-helm.DataHelmTemplateSetSensitive)[]

set_sensitive block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#set_sensitive DataHelmTemplate#set_sensitive}

---

##### `setString`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.setString"></a>

```typescript
public readonly setString: IResolvable | DataHelmTemplateSetString[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-helm.DataHelmTemplateSetString`](#@cdktf/provider-helm.DataHelmTemplateSetString)[]

set_string block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#set_string DataHelmTemplate#set_string}

---

##### `showOnly`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.showOnly"></a>

```typescript
public readonly showOnly: string[];
```

- *Type:* `string`[]

Only show manifests rendered from the given templates.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#show_only DataHelmTemplate#show_only}

---

##### `skipCrds`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.skipCrds"></a>

```typescript
public readonly skipCrds: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

If set, no CRDs will be installed. By default, CRDs are installed if not already present.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#skip_crds DataHelmTemplate#skip_crds}

---

##### `skipTests`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.skipTests"></a>

```typescript
public readonly skipTests: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

If set, tests will not be rendered. By default, tests are rendered.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#skip_tests DataHelmTemplate#skip_tests}

---

##### `timeout`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* `number`

Time in seconds to wait for any individual kubernetes operation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#timeout DataHelmTemplate#timeout}

---

##### `validate`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.validate"></a>

```typescript
public readonly validate: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Validate your manifests against the Kubernetes cluster you are currently pointing at.

This is the same validation performed on an install

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#validate DataHelmTemplate#validate}

---

##### `values`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* `string`[]

List of values in raw yaml format to pass to helm.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#values DataHelmTemplate#values}

---

##### `verify`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.verify"></a>

```typescript
public readonly verify: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Verify the package before installing it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#verify DataHelmTemplate#verify}

---

##### `version`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* `string`

Specify the exact chart version to install. If this is not specified, the latest version is installed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#version DataHelmTemplate#version}

---

##### `wait`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateConfig.property.wait"></a>

```typescript
public readonly wait: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Will wait until all resources are in a ready state before marking the release as successful.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#wait DataHelmTemplate#wait}

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

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#binary_path DataHelmTemplate#binary_path}

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

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#name DataHelmTemplate#name}.

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSet.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#value DataHelmTemplate#value}.

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSet.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#type DataHelmTemplate#type}.

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

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#name DataHelmTemplate#name}.

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetSensitive.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#value DataHelmTemplate#value}.

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetSensitive.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#type DataHelmTemplate#type}.

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

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#name DataHelmTemplate#name}.

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetString.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template#value DataHelmTemplate#value}.

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

##### `proxyUrl`<sup>Optional</sup> <a name="@cdktf/provider-helm.HelmProviderKubernetes.property.proxyUrl"></a>

```typescript
public readonly proxyUrl: string;
```

- *Type:* `string`

URL to the proxy to be used for all API requests.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#proxy_url HelmProvider#proxy_url}

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
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#env HelmProvider#env}.

---

### ReleaseConfig <a name="@cdktf/provider-helm.ReleaseConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ReleaseConfig } from '@cdktf/provider-helm'

const releaseConfig: ReleaseConfig = { ... }
```

##### `connection`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.connection"></a>

```typescript
public readonly connection: ISSHProvisionerConnection | IWinrmProvisionerConnection;
```

- *Type:* [`cdktf.ISSHProvisionerConnection`](#cdktf.ISSHProvisionerConnection) | [`cdktf.IWinrmProvisionerConnection`](#cdktf.IWinrmProvisionerConnection)

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `forEach`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* [`cdktf.ITerraformIterator`](#cdktf.ITerraformIterator)

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

##### `provisioners`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: IFileProvisioner | ILocalExecProvisioner | IRemoteExecProvisioner[];
```

- *Type:* [`cdktf.IFileProvisioner`](#cdktf.IFileProvisioner) | [`cdktf.ILocalExecProvisioner`](#cdktf.ILocalExecProvisioner) | [`cdktf.IRemoteExecProvisioner`](#cdktf.IRemoteExecProvisioner)[]

---

##### `chart`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.chart"></a>

```typescript
public readonly chart: string;
```

- *Type:* `string`

Chart name to be installed. A path may be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#chart Release#chart}

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Release name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#name Release#name}

---

##### `atomic`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.atomic"></a>

```typescript
public readonly atomic: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

If set, installation process purges chart on fail. The wait flag will be set automatically if atomic is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#atomic Release#atomic}

---

##### `cleanupOnFail`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.cleanupOnFail"></a>

```typescript
public readonly cleanupOnFail: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Allow deletion of new resources created in this upgrade when upgrade fails.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#cleanup_on_fail Release#cleanup_on_fail}

---

##### `createNamespace`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.createNamespace"></a>

```typescript
public readonly createNamespace: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Create the namespace if it does not exist.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#create_namespace Release#create_namespace}

---

##### `dependencyUpdate`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.dependencyUpdate"></a>

```typescript
public readonly dependencyUpdate: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Run helm dependency update before installing the chart.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#dependency_update Release#dependency_update}

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

Add a custom description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#description Release#description}

---

##### `devel`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.devel"></a>

```typescript
public readonly devel: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#devel Release#devel}

---

##### `disableCrdHooks`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.disableCrdHooks"></a>

```typescript
public readonly disableCrdHooks: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Prevent CRD hooks from, running, but run other hooks.  See helm install --no-crd-hook.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#disable_crd_hooks Release#disable_crd_hooks}

---

##### `disableOpenapiValidation`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.disableOpenapiValidation"></a>

```typescript
public readonly disableOpenapiValidation: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#disable_openapi_validation Release#disable_openapi_validation}

---

##### `disableWebhooks`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.disableWebhooks"></a>

```typescript
public readonly disableWebhooks: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Prevent hooks from running.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#disable_webhooks Release#disable_webhooks}

---

##### `forceUpdate`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.forceUpdate"></a>

```typescript
public readonly forceUpdate: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Force resource update through delete/recreate if needed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#force_update Release#force_update}

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#id Release#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyring`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.keyring"></a>

```typescript
public readonly keyring: string;
```

- *Type:* `string`

Location of public keys used for verification. Used only if `verify` is true.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#keyring Release#keyring}

---

##### `lint`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.lint"></a>

```typescript
public readonly lint: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Run helm lint when planning.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#lint Release#lint}

---

##### `maxHistory`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.maxHistory"></a>

```typescript
public readonly maxHistory: number;
```

- *Type:* `number`

Limit the maximum number of revisions saved per release. Use 0 for no limit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#max_history Release#max_history}

---

##### `namespace`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* `string`

Namespace to install the release into.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#namespace Release#namespace}

---

##### `passCredentials`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.passCredentials"></a>

```typescript
public readonly passCredentials: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Pass credentials to all domains.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#pass_credentials Release#pass_credentials}

---

##### `postrender`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.postrender"></a>

```typescript
public readonly postrender: ReleasePostrender;
```

- *Type:* [`@cdktf/provider-helm.ReleasePostrender`](#@cdktf/provider-helm.ReleasePostrender)

postrender block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#postrender Release#postrender}

---

##### `recreatePods`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.recreatePods"></a>

```typescript
public readonly recreatePods: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Perform pods restart during upgrade/rollback.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#recreate_pods Release#recreate_pods}

---

##### `renderSubchartNotes`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.renderSubchartNotes"></a>

```typescript
public readonly renderSubchartNotes: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

If set, render subchart notes along with the parent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#render_subchart_notes Release#render_subchart_notes}

---

##### `replace`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.replace"></a>

```typescript
public readonly replace: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Re-use the given name, even if that name is already used. This is unsafe in production.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#replace Release#replace}

---

##### `repository`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* `string`

Repository where to locate the requested chart. If is a URL the chart is installed without installing the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#repository Release#repository}

---

##### `repositoryCaFile`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.repositoryCaFile"></a>

```typescript
public readonly repositoryCaFile: string;
```

- *Type:* `string`

The Repositories CA File.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#repository_ca_file Release#repository_ca_file}

---

##### `repositoryCertFile`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.repositoryCertFile"></a>

```typescript
public readonly repositoryCertFile: string;
```

- *Type:* `string`

The repositories cert file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#repository_cert_file Release#repository_cert_file}

---

##### `repositoryKeyFile`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.repositoryKeyFile"></a>

```typescript
public readonly repositoryKeyFile: string;
```

- *Type:* `string`

The repositories cert key file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#repository_key_file Release#repository_key_file}

---

##### `repositoryPassword`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.repositoryPassword"></a>

```typescript
public readonly repositoryPassword: string;
```

- *Type:* `string`

Password for HTTP basic authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#repository_password Release#repository_password}

---

##### `repositoryUsername`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.repositoryUsername"></a>

```typescript
public readonly repositoryUsername: string;
```

- *Type:* `string`

Username for HTTP basic authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#repository_username Release#repository_username}

---

##### `resetValues`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.resetValues"></a>

```typescript
public readonly resetValues: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

When upgrading, reset the values to the ones built into the chart.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#reset_values Release#reset_values}

---

##### `reuseValues`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.reuseValues"></a>

```typescript
public readonly reuseValues: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#reuse_values Release#reuse_values}

---

##### `set`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.set"></a>

```typescript
public readonly set: IResolvable | ReleaseSet[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-helm.ReleaseSet`](#@cdktf/provider-helm.ReleaseSet)[]

set block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#set Release#set}

---

##### `setSensitive`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.setSensitive"></a>

```typescript
public readonly setSensitive: IResolvable | ReleaseSetSensitive[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-helm.ReleaseSetSensitive`](#@cdktf/provider-helm.ReleaseSetSensitive)[]

set_sensitive block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#set_sensitive Release#set_sensitive}

---

##### `skipCrds`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.skipCrds"></a>

```typescript
public readonly skipCrds: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

If set, no CRDs will be installed. By default, CRDs are installed if not already present.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#skip_crds Release#skip_crds}

---

##### `timeout`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* `number`

Time in seconds to wait for any individual kubernetes operation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#timeout Release#timeout}

---

##### `values`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* `string`[]

List of values in raw yaml format to pass to helm.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#values Release#values}

---

##### `verify`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.verify"></a>

```typescript
public readonly verify: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Verify the package before installing it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#verify Release#verify}

---

##### `version`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* `string`

Specify the exact chart version to install. If this is not specified, the latest version is installed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#version Release#version}

---

##### `wait`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.wait"></a>

```typescript
public readonly wait: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Will wait until all resources are in a ready state before marking the release as successful.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#wait Release#wait}

---

##### `waitForJobs`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseConfig.property.waitForJobs"></a>

```typescript
public readonly waitForJobs: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

If wait is enabled, will wait until all Jobs have been completed before marking the release as successful.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#wait_for_jobs Release#wait_for_jobs}

---

### ReleaseMetadata <a name="@cdktf/provider-helm.ReleaseMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ReleaseMetadata } from '@cdktf/provider-helm'

const releaseMetadata: ReleaseMetadata = { ... }
```

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

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#binary_path Release#binary_path}

---

##### `args`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleasePostrender.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* `string`[]

an argument to the post-renderer (can specify multiple).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#args Release#args}

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

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#name Release#name}.

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseSet.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#value Release#value}.

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseSet.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#type Release#type}.

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

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#name Release#name}.

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseSetSensitive.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#value Release#value}.

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseSetSensitive.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release#type Release#type}.

---

## Classes <a name="Classes"></a>

### DataHelmTemplatePostrenderOutputReference <a name="@cdktf/provider-helm.DataHelmTemplatePostrenderOutputReference"></a>

#### Initializers <a name="@cdktf/provider-helm.DataHelmTemplatePostrenderOutputReference.Initializer"></a>

```typescript
import { DataHelmTemplatePostrenderOutputReference } from '@cdktf/provider-helm'

new DataHelmTemplatePostrenderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplatePostrenderOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplatePostrenderOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

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

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplatePostrenderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataHelmTemplatePostrender;
```

- *Type:* [`@cdktf/provider-helm.DataHelmTemplatePostrender`](#@cdktf/provider-helm.DataHelmTemplatePostrender)

---


### DataHelmTemplateSetList <a name="@cdktf/provider-helm.DataHelmTemplateSetList"></a>

#### Initializers <a name="@cdktf/provider-helm.DataHelmTemplateSetList.Initializer"></a>

```typescript
import { DataHelmTemplateSetList } from '@cdktf/provider-helm'

new DataHelmTemplateSetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetList.parameter.terraformResource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetList.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetList.parameter.wrapsSet"></a>

- *Type:* `boolean`

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods"></a>

##### `get` <a name="@cdktf/provider-helm.DataHelmTemplateSetList.get"></a>

```typescript
public get(index: number)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetList.parameter.index"></a>

- *Type:* `number`

the index of the item to return.

---


#### Properties <a name="Properties"></a>

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataHelmTemplateSet[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-helm.DataHelmTemplateSet`](#@cdktf/provider-helm.DataHelmTemplateSet)[]

---


### DataHelmTemplateSetOutputReference <a name="@cdktf/provider-helm.DataHelmTemplateSetOutputReference"></a>

#### Initializers <a name="@cdktf/provider-helm.DataHelmTemplateSetOutputReference.Initializer"></a>

```typescript
import { DataHelmTemplateSetOutputReference } from '@cdktf/provider-helm'

new DataHelmTemplateSetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetOutputReference.parameter.complexObjectIndex"></a>

- *Type:* `number`

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetOutputReference.parameter.complexObjectIsFromSet"></a>

- *Type:* `boolean`

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods"></a>

##### `resetType` <a name="@cdktf/provider-helm.DataHelmTemplateSetOutputReference.resetType"></a>

```typescript
public resetType()
```


#### Properties <a name="Properties"></a>

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `typeInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* `string`

---

##### `valueInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataHelmTemplateSet;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-helm.DataHelmTemplateSet`](#@cdktf/provider-helm.DataHelmTemplateSet)

---


### DataHelmTemplateSetSensitiveList <a name="@cdktf/provider-helm.DataHelmTemplateSetSensitiveList"></a>

#### Initializers <a name="@cdktf/provider-helm.DataHelmTemplateSetSensitiveList.Initializer"></a>

```typescript
import { DataHelmTemplateSetSensitiveList } from '@cdktf/provider-helm'

new DataHelmTemplateSetSensitiveList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetSensitiveList.parameter.terraformResource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetSensitiveList.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetSensitiveList.parameter.wrapsSet"></a>

- *Type:* `boolean`

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods"></a>

##### `get` <a name="@cdktf/provider-helm.DataHelmTemplateSetSensitiveList.get"></a>

```typescript
public get(index: number)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetSensitiveList.parameter.index"></a>

- *Type:* `number`

the index of the item to return.

---


#### Properties <a name="Properties"></a>

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetSensitiveList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataHelmTemplateSetSensitive[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-helm.DataHelmTemplateSetSensitive`](#@cdktf/provider-helm.DataHelmTemplateSetSensitive)[]

---


### DataHelmTemplateSetSensitiveOutputReference <a name="@cdktf/provider-helm.DataHelmTemplateSetSensitiveOutputReference"></a>

#### Initializers <a name="@cdktf/provider-helm.DataHelmTemplateSetSensitiveOutputReference.Initializer"></a>

```typescript
import { DataHelmTemplateSetSensitiveOutputReference } from '@cdktf/provider-helm'

new DataHelmTemplateSetSensitiveOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetSensitiveOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetSensitiveOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetSensitiveOutputReference.parameter.complexObjectIndex"></a>

- *Type:* `number`

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetSensitiveOutputReference.parameter.complexObjectIsFromSet"></a>

- *Type:* `boolean`

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods"></a>

##### `resetType` <a name="@cdktf/provider-helm.DataHelmTemplateSetSensitiveOutputReference.resetType"></a>

```typescript
public resetType()
```


#### Properties <a name="Properties"></a>

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetSensitiveOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `typeInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetSensitiveOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* `string`

---

##### `valueInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetSensitiveOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetSensitiveOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetSensitiveOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetSensitiveOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetSensitiveOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataHelmTemplateSetSensitive;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-helm.DataHelmTemplateSetSensitive`](#@cdktf/provider-helm.DataHelmTemplateSetSensitive)

---


### DataHelmTemplateSetStringList <a name="@cdktf/provider-helm.DataHelmTemplateSetStringList"></a>

#### Initializers <a name="@cdktf/provider-helm.DataHelmTemplateSetStringList.Initializer"></a>

```typescript
import { DataHelmTemplateSetStringList } from '@cdktf/provider-helm'

new DataHelmTemplateSetStringList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetStringList.parameter.terraformResource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetStringList.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetStringList.parameter.wrapsSet"></a>

- *Type:* `boolean`

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods"></a>

##### `get` <a name="@cdktf/provider-helm.DataHelmTemplateSetStringList.get"></a>

```typescript
public get(index: number)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetStringList.parameter.index"></a>

- *Type:* `number`

the index of the item to return.

---


#### Properties <a name="Properties"></a>

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetStringList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataHelmTemplateSetString[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-helm.DataHelmTemplateSetString`](#@cdktf/provider-helm.DataHelmTemplateSetString)[]

---


### DataHelmTemplateSetStringOutputReference <a name="@cdktf/provider-helm.DataHelmTemplateSetStringOutputReference"></a>

#### Initializers <a name="@cdktf/provider-helm.DataHelmTemplateSetStringOutputReference.Initializer"></a>

```typescript
import { DataHelmTemplateSetStringOutputReference } from '@cdktf/provider-helm'

new DataHelmTemplateSetStringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetStringOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetStringOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetStringOutputReference.parameter.complexObjectIndex"></a>

- *Type:* `number`

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetStringOutputReference.parameter.complexObjectIsFromSet"></a>

- *Type:* `boolean`

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---



#### Properties <a name="Properties"></a>

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetStringOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `valueInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetStringOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetStringOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetStringOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-helm.DataHelmTemplateSetStringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataHelmTemplateSetString;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-helm.DataHelmTemplateSetString`](#@cdktf/provider-helm.DataHelmTemplateSetString)

---


### ReleaseMetadataList <a name="@cdktf/provider-helm.ReleaseMetadataList"></a>

#### Initializers <a name="@cdktf/provider-helm.ReleaseMetadataList.Initializer"></a>

```typescript
import { ReleaseMetadataList } from '@cdktf/provider-helm'

new ReleaseMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseMetadataList.parameter.terraformResource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseMetadataList.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseMetadataList.parameter.wrapsSet"></a>

- *Type:* `boolean`

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods"></a>

##### `get` <a name="@cdktf/provider-helm.ReleaseMetadataList.get"></a>

```typescript
public get(index: number)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseMetadataList.parameter.index"></a>

- *Type:* `number`

the index of the item to return.

---




### ReleaseMetadataOutputReference <a name="@cdktf/provider-helm.ReleaseMetadataOutputReference"></a>

#### Initializers <a name="@cdktf/provider-helm.ReleaseMetadataOutputReference.Initializer"></a>

```typescript
import { ReleaseMetadataOutputReference } from '@cdktf/provider-helm'

new ReleaseMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseMetadataOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseMetadataOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseMetadataOutputReference.parameter.complexObjectIndex"></a>

- *Type:* `number`

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseMetadataOutputReference.parameter.complexObjectIsFromSet"></a>

- *Type:* `boolean`

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---



#### Properties <a name="Properties"></a>

##### `appVersion`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseMetadataOutputReference.property.appVersion"></a>

```typescript
public readonly appVersion: string;
```

- *Type:* `string`

---

##### `chart`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseMetadataOutputReference.property.chart"></a>

```typescript
public readonly chart: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseMetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseMetadataOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* `string`

---

##### `revision`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseMetadataOutputReference.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* `number`

---

##### `values`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseMetadataOutputReference.property.values"></a>

```typescript
public readonly values: string;
```

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseMetadataOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* `string`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ReleaseMetadata;
```

- *Type:* [`@cdktf/provider-helm.ReleaseMetadata`](#@cdktf/provider-helm.ReleaseMetadata)

---


### ReleasePostrenderOutputReference <a name="@cdktf/provider-helm.ReleasePostrenderOutputReference"></a>

#### Initializers <a name="@cdktf/provider-helm.ReleasePostrenderOutputReference.Initializer"></a>

```typescript
import { ReleasePostrenderOutputReference } from '@cdktf/provider-helm'

new ReleasePostrenderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleasePostrenderOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleasePostrenderOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods"></a>

##### `resetArgs` <a name="@cdktf/provider-helm.ReleasePostrenderOutputReference.resetArgs"></a>

```typescript
public resetArgs()
```


#### Properties <a name="Properties"></a>

##### `argsInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleasePostrenderOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: string[];
```

- *Type:* `string`[]

---

##### `binaryPathInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleasePostrenderOutputReference.property.binaryPathInput"></a>

```typescript
public readonly binaryPathInput: string;
```

- *Type:* `string`

---

##### `args`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleasePostrenderOutputReference.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* `string`[]

---

##### `binaryPath`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleasePostrenderOutputReference.property.binaryPath"></a>

```typescript
public readonly binaryPath: string;
```

- *Type:* `string`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleasePostrenderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ReleasePostrender;
```

- *Type:* [`@cdktf/provider-helm.ReleasePostrender`](#@cdktf/provider-helm.ReleasePostrender)

---


### ReleaseSetList <a name="@cdktf/provider-helm.ReleaseSetList"></a>

#### Initializers <a name="@cdktf/provider-helm.ReleaseSetList.Initializer"></a>

```typescript
import { ReleaseSetList } from '@cdktf/provider-helm'

new ReleaseSetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseSetList.parameter.terraformResource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseSetList.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseSetList.parameter.wrapsSet"></a>

- *Type:* `boolean`

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods"></a>

##### `get` <a name="@cdktf/provider-helm.ReleaseSetList.get"></a>

```typescript
public get(index: number)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseSetList.parameter.index"></a>

- *Type:* `number`

the index of the item to return.

---


#### Properties <a name="Properties"></a>

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseSetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ReleaseSet[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-helm.ReleaseSet`](#@cdktf/provider-helm.ReleaseSet)[]

---


### ReleaseSetOutputReference <a name="@cdktf/provider-helm.ReleaseSetOutputReference"></a>

#### Initializers <a name="@cdktf/provider-helm.ReleaseSetOutputReference.Initializer"></a>

```typescript
import { ReleaseSetOutputReference } from '@cdktf/provider-helm'

new ReleaseSetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseSetOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseSetOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseSetOutputReference.parameter.complexObjectIndex"></a>

- *Type:* `number`

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseSetOutputReference.parameter.complexObjectIsFromSet"></a>

- *Type:* `boolean`

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods"></a>

##### `resetType` <a name="@cdktf/provider-helm.ReleaseSetOutputReference.resetType"></a>

```typescript
public resetType()
```


#### Properties <a name="Properties"></a>

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseSetOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `typeInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseSetOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* `string`

---

##### `valueInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseSetOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseSetOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseSetOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseSetOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseSetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ReleaseSet;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-helm.ReleaseSet`](#@cdktf/provider-helm.ReleaseSet)

---


### ReleaseSetSensitiveList <a name="@cdktf/provider-helm.ReleaseSetSensitiveList"></a>

#### Initializers <a name="@cdktf/provider-helm.ReleaseSetSensitiveList.Initializer"></a>

```typescript
import { ReleaseSetSensitiveList } from '@cdktf/provider-helm'

new ReleaseSetSensitiveList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseSetSensitiveList.parameter.terraformResource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseSetSensitiveList.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseSetSensitiveList.parameter.wrapsSet"></a>

- *Type:* `boolean`

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods"></a>

##### `get` <a name="@cdktf/provider-helm.ReleaseSetSensitiveList.get"></a>

```typescript
public get(index: number)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseSetSensitiveList.parameter.index"></a>

- *Type:* `number`

the index of the item to return.

---


#### Properties <a name="Properties"></a>

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseSetSensitiveList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ReleaseSetSensitive[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-helm.ReleaseSetSensitive`](#@cdktf/provider-helm.ReleaseSetSensitive)[]

---


### ReleaseSetSensitiveOutputReference <a name="@cdktf/provider-helm.ReleaseSetSensitiveOutputReference"></a>

#### Initializers <a name="@cdktf/provider-helm.ReleaseSetSensitiveOutputReference.Initializer"></a>

```typescript
import { ReleaseSetSensitiveOutputReference } from '@cdktf/provider-helm'

new ReleaseSetSensitiveOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseSetSensitiveOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseSetSensitiveOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseSetSensitiveOutputReference.parameter.complexObjectIndex"></a>

- *Type:* `number`

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseSetSensitiveOutputReference.parameter.complexObjectIsFromSet"></a>

- *Type:* `boolean`

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods"></a>

##### `resetType` <a name="@cdktf/provider-helm.ReleaseSetSensitiveOutputReference.resetType"></a>

```typescript
public resetType()
```


#### Properties <a name="Properties"></a>

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseSetSensitiveOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `typeInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseSetSensitiveOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* `string`

---

##### `valueInput`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseSetSensitiveOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseSetSensitiveOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseSetSensitiveOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-helm.ReleaseSetSensitiveOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-helm.ReleaseSetSensitiveOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ReleaseSetSensitive;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-helm.ReleaseSetSensitive`](#@cdktf/provider-helm.ReleaseSetSensitive)

---



