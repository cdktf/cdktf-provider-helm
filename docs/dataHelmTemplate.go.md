# `dataHelmTemplate` Submodule <a name="`dataHelmTemplate` Submodule" id="@cdktf/provider-helm.dataHelmTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHelmTemplate <a name="DataHelmTemplate" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template helm_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/v10/datahelmtemplate"

datahelmtemplate.NewDataHelmTemplate(scope Construct, id *string, config DataHelmTemplateConfig) DataHelmTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig">DataHelmTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig">DataHelmTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putPostrender">PutPostrender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSet">PutSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetList">PutSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetSensitive">PutSetSensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetString">PutSetString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetApiVersions">ResetApiVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetAtomic">ResetAtomic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetCrds">ResetCrds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetCreateNamespace">ResetCreateNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDependencyUpdate">ResetDependencyUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDevel">ResetDevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDisableOpenapiValidation">ResetDisableOpenapiValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDisableWebhooks">ResetDisableWebhooks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetIncludeCrds">ResetIncludeCrds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetIsUpgrade">ResetIsUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetKeyring">ResetKeyring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetKubeVersion">ResetKubeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetManifest">ResetManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetManifests">ResetManifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetNotes">ResetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetPassCredentials">ResetPassCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetPostrender">ResetPostrender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRenderSubchartNotes">ResetRenderSubchartNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetReplace">ResetReplace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepository">ResetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryCaFile">ResetRepositoryCaFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryCertFile">ResetRepositoryCertFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryKeyFile">ResetRepositoryKeyFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryPassword">ResetRepositoryPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryUsername">ResetRepositoryUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetResetValues">ResetResetValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetReuseValues">ResetReuseValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSet">ResetSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSetList">ResetSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSetSensitive">ResetSetSensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSetString">ResetSetString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetShowOnly">ResetShowOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSkipCrds">ResetSkipCrds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSkipTests">ResetSkipTests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetTfValues">ResetTfValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetValidate">ResetValidate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetVerify">ResetVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetVersion">ResetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetWait">ResetWait</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutPostrender` <a name="PutPostrender" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putPostrender"></a>

```go
func PutPostrender(value DataHelmTemplatePostrender)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putPostrender.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a>

---

##### `PutSet` <a name="PutSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSet"></a>

```go
func PutSet(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSet.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSetList` <a name="PutSetList" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetList"></a>

```go
func PutSetList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetList.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSetSensitive` <a name="PutSetSensitive" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetSensitive"></a>

```go
func PutSetSensitive(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetSensitive.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSetString` <a name="PutSetString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetString"></a>

```go
func PutSetString(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetString.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetApiVersions` <a name="ResetApiVersions" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetApiVersions"></a>

```go
func ResetApiVersions()
```

##### `ResetAtomic` <a name="ResetAtomic" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetAtomic"></a>

```go
func ResetAtomic()
```

##### `ResetCrds` <a name="ResetCrds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetCrds"></a>

```go
func ResetCrds()
```

##### `ResetCreateNamespace` <a name="ResetCreateNamespace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetCreateNamespace"></a>

```go
func ResetCreateNamespace()
```

##### `ResetDependencyUpdate` <a name="ResetDependencyUpdate" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDependencyUpdate"></a>

```go
func ResetDependencyUpdate()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDevel` <a name="ResetDevel" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDevel"></a>

```go
func ResetDevel()
```

##### `ResetDisableOpenapiValidation` <a name="ResetDisableOpenapiValidation" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDisableOpenapiValidation"></a>

```go
func ResetDisableOpenapiValidation()
```

##### `ResetDisableWebhooks` <a name="ResetDisableWebhooks" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDisableWebhooks"></a>

```go
func ResetDisableWebhooks()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetId"></a>

```go
func ResetId()
```

##### `ResetIncludeCrds` <a name="ResetIncludeCrds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetIncludeCrds"></a>

```go
func ResetIncludeCrds()
```

##### `ResetIsUpgrade` <a name="ResetIsUpgrade" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetIsUpgrade"></a>

```go
func ResetIsUpgrade()
```

##### `ResetKeyring` <a name="ResetKeyring" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetKeyring"></a>

```go
func ResetKeyring()
```

##### `ResetKubeVersion` <a name="ResetKubeVersion" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetKubeVersion"></a>

```go
func ResetKubeVersion()
```

##### `ResetManifest` <a name="ResetManifest" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetManifest"></a>

```go
func ResetManifest()
```

##### `ResetManifests` <a name="ResetManifests" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetManifests"></a>

```go
func ResetManifests()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetNotes` <a name="ResetNotes" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetNotes"></a>

```go
func ResetNotes()
```

##### `ResetPassCredentials` <a name="ResetPassCredentials" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetPassCredentials"></a>

```go
func ResetPassCredentials()
```

##### `ResetPostrender` <a name="ResetPostrender" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetPostrender"></a>

```go
func ResetPostrender()
```

##### `ResetRenderSubchartNotes` <a name="ResetRenderSubchartNotes" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRenderSubchartNotes"></a>

```go
func ResetRenderSubchartNotes()
```

##### `ResetReplace` <a name="ResetReplace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetReplace"></a>

```go
func ResetReplace()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepository"></a>

```go
func ResetRepository()
```

##### `ResetRepositoryCaFile` <a name="ResetRepositoryCaFile" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryCaFile"></a>

```go
func ResetRepositoryCaFile()
```

##### `ResetRepositoryCertFile` <a name="ResetRepositoryCertFile" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryCertFile"></a>

```go
func ResetRepositoryCertFile()
```

##### `ResetRepositoryKeyFile` <a name="ResetRepositoryKeyFile" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryKeyFile"></a>

```go
func ResetRepositoryKeyFile()
```

##### `ResetRepositoryPassword` <a name="ResetRepositoryPassword" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryPassword"></a>

```go
func ResetRepositoryPassword()
```

##### `ResetRepositoryUsername` <a name="ResetRepositoryUsername" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryUsername"></a>

```go
func ResetRepositoryUsername()
```

##### `ResetResetValues` <a name="ResetResetValues" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetResetValues"></a>

```go
func ResetResetValues()
```

##### `ResetReuseValues` <a name="ResetReuseValues" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetReuseValues"></a>

```go
func ResetReuseValues()
```

##### `ResetSet` <a name="ResetSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSet"></a>

```go
func ResetSet()
```

##### `ResetSetList` <a name="ResetSetList" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSetList"></a>

```go
func ResetSetList()
```

##### `ResetSetSensitive` <a name="ResetSetSensitive" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSetSensitive"></a>

```go
func ResetSetSensitive()
```

##### `ResetSetString` <a name="ResetSetString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSetString"></a>

```go
func ResetSetString()
```

##### `ResetShowOnly` <a name="ResetShowOnly" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetShowOnly"></a>

```go
func ResetShowOnly()
```

##### `ResetSkipCrds` <a name="ResetSkipCrds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSkipCrds"></a>

```go
func ResetSkipCrds()
```

##### `ResetSkipTests` <a name="ResetSkipTests" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSkipTests"></a>

```go
func ResetSkipTests()
```

##### `ResetTfValues` <a name="ResetTfValues" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetTfValues"></a>

```go
func ResetTfValues()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetValidate` <a name="ResetValidate" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetValidate"></a>

```go
func ResetValidate()
```

##### `ResetVerify` <a name="ResetVerify" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetVerify"></a>

```go
func ResetVerify()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetVersion"></a>

```go
func ResetVersion()
```

##### `ResetWait` <a name="ResetWait" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetWait"></a>

```go
func ResetWait()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataHelmTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/v10/datahelmtemplate"

datahelmtemplate.DataHelmTemplate_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/v10/datahelmtemplate"

datahelmtemplate.DataHelmTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/v10/datahelmtemplate"

datahelmtemplate.DataHelmTemplate_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/v10/datahelmtemplate"

datahelmtemplate.DataHelmTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataHelmTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataHelmTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataHelmTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataHelmTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.postrender">Postrender</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference">DataHelmTemplatePostrenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.set">Set</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList">DataHelmTemplateSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setList">SetList</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList">DataHelmTemplateSetListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setSensitive">SetSensitive</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList">DataHelmTemplateSetSensitiveList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setString">SetString</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList">DataHelmTemplateSetStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.apiVersionsInput">ApiVersionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.atomicInput">AtomicInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.chartInput">ChartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.crdsInput">CrdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.createNamespaceInput">CreateNamespaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.dependencyUpdateInput">DependencyUpdateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.develInput">DevelInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableOpenapiValidationInput">DisableOpenapiValidationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableWebhooksInput">DisableWebhooksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.includeCrdsInput">IncludeCrdsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.isUpgradeInput">IsUpgradeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.keyringInput">KeyringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.kubeVersionInput">KubeVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifestInput">ManifestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifestsInput">ManifestsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.notesInput">NotesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.passCredentialsInput">PassCredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.postrenderInput">PostrenderInput</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.renderSubchartNotesInput">RenderSubchartNotesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.replaceInput">ReplaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCaFileInput">RepositoryCaFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCertFileInput">RepositoryCertFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryKeyFileInput">RepositoryKeyFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryPasswordInput">RepositoryPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryUsernameInput">RepositoryUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.resetValuesInput">ResetValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.reuseValuesInput">ReuseValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setInput">SetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setListInput">SetListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setSensitiveInput">SetSensitiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setStringInput">SetStringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.showOnlyInput">ShowOnlyInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipCrdsInput">SkipCrdsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipTestsInput">SkipTestsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.validateInput">ValidateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.verifyInput">VerifyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.waitInput">WaitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.apiVersions">ApiVersions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.atomic">Atomic</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.chart">Chart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.crds">Crds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.createNamespace">CreateNamespace</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.dependencyUpdate">DependencyUpdate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.devel">Devel</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableOpenapiValidation">DisableOpenapiValidation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableWebhooks">DisableWebhooks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.includeCrds">IncludeCrds</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.isUpgrade">IsUpgrade</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.keyring">Keyring</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.kubeVersion">KubeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifest">Manifest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifests">Manifests</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.notes">Notes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.passCredentials">PassCredentials</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.renderSubchartNotes">RenderSubchartNotes</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.replace">Replace</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCaFile">RepositoryCaFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCertFile">RepositoryCertFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryKeyFile">RepositoryKeyFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryPassword">RepositoryPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryUsername">RepositoryUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.resetValues">ResetValues</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.reuseValues">ReuseValues</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.showOnly">ShowOnly</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipCrds">SkipCrds</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipTests">SkipTests</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.validate">Validate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.verify">Verify</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.wait">Wait</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Postrender`<sup>Required</sup> <a name="Postrender" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.postrender"></a>

```go
func Postrender() DataHelmTemplatePostrenderOutputReference
```

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference">DataHelmTemplatePostrenderOutputReference</a>

---

##### `Set`<sup>Required</sup> <a name="Set" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.set"></a>

```go
func Set() DataHelmTemplateSetList
```

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList">DataHelmTemplateSetList</a>

---

##### `SetList`<sup>Required</sup> <a name="SetList" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setList"></a>

```go
func SetList() DataHelmTemplateSetListStructList
```

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList">DataHelmTemplateSetListStructList</a>

---

##### `SetSensitive`<sup>Required</sup> <a name="SetSensitive" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setSensitive"></a>

```go
func SetSensitive() DataHelmTemplateSetSensitiveList
```

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList">DataHelmTemplateSetSensitiveList</a>

---

##### `SetString`<sup>Required</sup> <a name="SetString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setString"></a>

```go
func SetString() DataHelmTemplateSetStringList
```

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList">DataHelmTemplateSetStringList</a>

---

##### `ApiVersionsInput`<sup>Optional</sup> <a name="ApiVersionsInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.apiVersionsInput"></a>

```go
func ApiVersionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AtomicInput`<sup>Optional</sup> <a name="AtomicInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.atomicInput"></a>

```go
func AtomicInput() interface{}
```

- *Type:* interface{}

---

##### `ChartInput`<sup>Optional</sup> <a name="ChartInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.chartInput"></a>

```go
func ChartInput() *string
```

- *Type:* *string

---

##### `CrdsInput`<sup>Optional</sup> <a name="CrdsInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.crdsInput"></a>

```go
func CrdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CreateNamespaceInput`<sup>Optional</sup> <a name="CreateNamespaceInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.createNamespaceInput"></a>

```go
func CreateNamespaceInput() interface{}
```

- *Type:* interface{}

---

##### `DependencyUpdateInput`<sup>Optional</sup> <a name="DependencyUpdateInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.dependencyUpdateInput"></a>

```go
func DependencyUpdateInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DevelInput`<sup>Optional</sup> <a name="DevelInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.develInput"></a>

```go
func DevelInput() interface{}
```

- *Type:* interface{}

---

##### `DisableOpenapiValidationInput`<sup>Optional</sup> <a name="DisableOpenapiValidationInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableOpenapiValidationInput"></a>

```go
func DisableOpenapiValidationInput() interface{}
```

- *Type:* interface{}

---

##### `DisableWebhooksInput`<sup>Optional</sup> <a name="DisableWebhooksInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableWebhooksInput"></a>

```go
func DisableWebhooksInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludeCrdsInput`<sup>Optional</sup> <a name="IncludeCrdsInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.includeCrdsInput"></a>

```go
func IncludeCrdsInput() interface{}
```

- *Type:* interface{}

---

##### `IsUpgradeInput`<sup>Optional</sup> <a name="IsUpgradeInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.isUpgradeInput"></a>

```go
func IsUpgradeInput() interface{}
```

- *Type:* interface{}

---

##### `KeyringInput`<sup>Optional</sup> <a name="KeyringInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.keyringInput"></a>

```go
func KeyringInput() *string
```

- *Type:* *string

---

##### `KubeVersionInput`<sup>Optional</sup> <a name="KubeVersionInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.kubeVersionInput"></a>

```go
func KubeVersionInput() *string
```

- *Type:* *string

---

##### `ManifestInput`<sup>Optional</sup> <a name="ManifestInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifestInput"></a>

```go
func ManifestInput() *string
```

- *Type:* *string

---

##### `ManifestsInput`<sup>Optional</sup> <a name="ManifestsInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifestsInput"></a>

```go
func ManifestsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `NotesInput`<sup>Optional</sup> <a name="NotesInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.notesInput"></a>

```go
func NotesInput() *string
```

- *Type:* *string

---

##### `PassCredentialsInput`<sup>Optional</sup> <a name="PassCredentialsInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.passCredentialsInput"></a>

```go
func PassCredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `PostrenderInput`<sup>Optional</sup> <a name="PostrenderInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.postrenderInput"></a>

```go
func PostrenderInput() DataHelmTemplatePostrender
```

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a>

---

##### `RenderSubchartNotesInput`<sup>Optional</sup> <a name="RenderSubchartNotesInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.renderSubchartNotesInput"></a>

```go
func RenderSubchartNotesInput() interface{}
```

- *Type:* interface{}

---

##### `ReplaceInput`<sup>Optional</sup> <a name="ReplaceInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.replaceInput"></a>

```go
func ReplaceInput() interface{}
```

- *Type:* interface{}

---

##### `RepositoryCaFileInput`<sup>Optional</sup> <a name="RepositoryCaFileInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCaFileInput"></a>

```go
func RepositoryCaFileInput() *string
```

- *Type:* *string

---

##### `RepositoryCertFileInput`<sup>Optional</sup> <a name="RepositoryCertFileInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCertFileInput"></a>

```go
func RepositoryCertFileInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `RepositoryKeyFileInput`<sup>Optional</sup> <a name="RepositoryKeyFileInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryKeyFileInput"></a>

```go
func RepositoryKeyFileInput() *string
```

- *Type:* *string

---

##### `RepositoryPasswordInput`<sup>Optional</sup> <a name="RepositoryPasswordInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryPasswordInput"></a>

```go
func RepositoryPasswordInput() *string
```

- *Type:* *string

---

##### `RepositoryUsernameInput`<sup>Optional</sup> <a name="RepositoryUsernameInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryUsernameInput"></a>

```go
func RepositoryUsernameInput() *string
```

- *Type:* *string

---

##### `ResetValuesInput`<sup>Optional</sup> <a name="ResetValuesInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.resetValuesInput"></a>

```go
func ResetValuesInput() interface{}
```

- *Type:* interface{}

---

##### `ReuseValuesInput`<sup>Optional</sup> <a name="ReuseValuesInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.reuseValuesInput"></a>

```go
func ReuseValuesInput() interface{}
```

- *Type:* interface{}

---

##### `SetInput`<sup>Optional</sup> <a name="SetInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setInput"></a>

```go
func SetInput() interface{}
```

- *Type:* interface{}

---

##### `SetListInput`<sup>Optional</sup> <a name="SetListInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setListInput"></a>

```go
func SetListInput() interface{}
```

- *Type:* interface{}

---

##### `SetSensitiveInput`<sup>Optional</sup> <a name="SetSensitiveInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setSensitiveInput"></a>

```go
func SetSensitiveInput() interface{}
```

- *Type:* interface{}

---

##### `SetStringInput`<sup>Optional</sup> <a name="SetStringInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setStringInput"></a>

```go
func SetStringInput() interface{}
```

- *Type:* interface{}

---

##### `ShowOnlyInput`<sup>Optional</sup> <a name="ShowOnlyInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.showOnlyInput"></a>

```go
func ShowOnlyInput() *[]*string
```

- *Type:* *[]*string

---

##### `SkipCrdsInput`<sup>Optional</sup> <a name="SkipCrdsInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipCrdsInput"></a>

```go
func SkipCrdsInput() interface{}
```

- *Type:* interface{}

---

##### `SkipTestsInput`<sup>Optional</sup> <a name="SkipTestsInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipTestsInput"></a>

```go
func SkipTestsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `ValidateInput`<sup>Optional</sup> <a name="ValidateInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.validateInput"></a>

```go
func ValidateInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `VerifyInput`<sup>Optional</sup> <a name="VerifyInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.verifyInput"></a>

```go
func VerifyInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `WaitInput`<sup>Optional</sup> <a name="WaitInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.waitInput"></a>

```go
func WaitInput() interface{}
```

- *Type:* interface{}

---

##### `ApiVersions`<sup>Required</sup> <a name="ApiVersions" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.apiVersions"></a>

```go
func ApiVersions() *[]*string
```

- *Type:* *[]*string

---

##### `Atomic`<sup>Required</sup> <a name="Atomic" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.atomic"></a>

```go
func Atomic() interface{}
```

- *Type:* interface{}

---

##### `Chart`<sup>Required</sup> <a name="Chart" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.chart"></a>

```go
func Chart() *string
```

- *Type:* *string

---

##### `Crds`<sup>Required</sup> <a name="Crds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.crds"></a>

```go
func Crds() *[]*string
```

- *Type:* *[]*string

---

##### `CreateNamespace`<sup>Required</sup> <a name="CreateNamespace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.createNamespace"></a>

```go
func CreateNamespace() interface{}
```

- *Type:* interface{}

---

##### `DependencyUpdate`<sup>Required</sup> <a name="DependencyUpdate" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.dependencyUpdate"></a>

```go
func DependencyUpdate() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Devel`<sup>Required</sup> <a name="Devel" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.devel"></a>

```go
func Devel() interface{}
```

- *Type:* interface{}

---

##### `DisableOpenapiValidation`<sup>Required</sup> <a name="DisableOpenapiValidation" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableOpenapiValidation"></a>

```go
func DisableOpenapiValidation() interface{}
```

- *Type:* interface{}

---

##### `DisableWebhooks`<sup>Required</sup> <a name="DisableWebhooks" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableWebhooks"></a>

```go
func DisableWebhooks() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncludeCrds`<sup>Required</sup> <a name="IncludeCrds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.includeCrds"></a>

```go
func IncludeCrds() interface{}
```

- *Type:* interface{}

---

##### `IsUpgrade`<sup>Required</sup> <a name="IsUpgrade" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.isUpgrade"></a>

```go
func IsUpgrade() interface{}
```

- *Type:* interface{}

---

##### `Keyring`<sup>Required</sup> <a name="Keyring" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.keyring"></a>

```go
func Keyring() *string
```

- *Type:* *string

---

##### `KubeVersion`<sup>Required</sup> <a name="KubeVersion" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.kubeVersion"></a>

```go
func KubeVersion() *string
```

- *Type:* *string

---

##### `Manifest`<sup>Required</sup> <a name="Manifest" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifest"></a>

```go
func Manifest() *string
```

- *Type:* *string

---

##### `Manifests`<sup>Required</sup> <a name="Manifests" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifests"></a>

```go
func Manifests() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.notes"></a>

```go
func Notes() *string
```

- *Type:* *string

---

##### `PassCredentials`<sup>Required</sup> <a name="PassCredentials" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.passCredentials"></a>

```go
func PassCredentials() interface{}
```

- *Type:* interface{}

---

##### `RenderSubchartNotes`<sup>Required</sup> <a name="RenderSubchartNotes" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.renderSubchartNotes"></a>

```go
func RenderSubchartNotes() interface{}
```

- *Type:* interface{}

---

##### `Replace`<sup>Required</sup> <a name="Replace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.replace"></a>

```go
func Replace() interface{}
```

- *Type:* interface{}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

##### `RepositoryCaFile`<sup>Required</sup> <a name="RepositoryCaFile" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCaFile"></a>

```go
func RepositoryCaFile() *string
```

- *Type:* *string

---

##### `RepositoryCertFile`<sup>Required</sup> <a name="RepositoryCertFile" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCertFile"></a>

```go
func RepositoryCertFile() *string
```

- *Type:* *string

---

##### `RepositoryKeyFile`<sup>Required</sup> <a name="RepositoryKeyFile" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryKeyFile"></a>

```go
func RepositoryKeyFile() *string
```

- *Type:* *string

---

##### `RepositoryPassword`<sup>Required</sup> <a name="RepositoryPassword" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryPassword"></a>

```go
func RepositoryPassword() *string
```

- *Type:* *string

---

##### `RepositoryUsername`<sup>Required</sup> <a name="RepositoryUsername" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryUsername"></a>

```go
func RepositoryUsername() *string
```

- *Type:* *string

---

##### `ResetValues`<sup>Required</sup> <a name="ResetValues" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.resetValues"></a>

```go
func ResetValues() interface{}
```

- *Type:* interface{}

---

##### `ReuseValues`<sup>Required</sup> <a name="ReuseValues" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.reuseValues"></a>

```go
func ReuseValues() interface{}
```

- *Type:* interface{}

---

##### `ShowOnly`<sup>Required</sup> <a name="ShowOnly" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.showOnly"></a>

```go
func ShowOnly() *[]*string
```

- *Type:* *[]*string

---

##### `SkipCrds`<sup>Required</sup> <a name="SkipCrds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipCrds"></a>

```go
func SkipCrds() interface{}
```

- *Type:* interface{}

---

##### `SkipTests`<sup>Required</sup> <a name="SkipTests" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipTests"></a>

```go
func SkipTests() interface{}
```

- *Type:* interface{}

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `Validate`<sup>Required</sup> <a name="Validate" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.validate"></a>

```go
func Validate() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `Verify`<sup>Required</sup> <a name="Verify" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.verify"></a>

```go
func Verify() interface{}
```

- *Type:* interface{}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `Wait`<sup>Required</sup> <a name="Wait" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.wait"></a>

```go
func Wait() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHelmTemplateConfig <a name="DataHelmTemplateConfig" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/v10/datahelmtemplate"

&datahelmtemplate.DataHelmTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Chart: *string,
	Name: *string,
	ApiVersions: *[]*string,
	Atomic: interface{},
	Crds: *[]*string,
	CreateNamespace: interface{},
	DependencyUpdate: interface{},
	Description: *string,
	Devel: interface{},
	DisableOpenapiValidation: interface{},
	DisableWebhooks: interface{},
	Id: *string,
	IncludeCrds: interface{},
	IsUpgrade: interface{},
	Keyring: *string,
	KubeVersion: *string,
	Manifest: *string,
	Manifests: *map[string]*string,
	Namespace: *string,
	Notes: *string,
	PassCredentials: interface{},
	Postrender: github.com/cdktf/cdktf-provider-helm-go/helm/v10.dataHelmTemplate.DataHelmTemplatePostrender,
	RenderSubchartNotes: interface{},
	Replace: interface{},
	Repository: *string,
	RepositoryCaFile: *string,
	RepositoryCertFile: *string,
	RepositoryKeyFile: *string,
	RepositoryPassword: *string,
	RepositoryUsername: *string,
	ResetValues: interface{},
	ReuseValues: interface{},
	Set: interface{},
	SetList: interface{},
	SetSensitive: interface{},
	SetString: interface{},
	ShowOnly: *[]*string,
	SkipCrds: interface{},
	SkipTests: interface{},
	Timeout: *f64,
	Validate: interface{},
	Values: *[]*string,
	Verify: interface{},
	Version: *string,
	Wait: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.chart">Chart</a></code> | <code>*string</code> | Chart name to be installed. A path may be used. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.name">Name</a></code> | <code>*string</code> | Release name. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.apiVersions">ApiVersions</a></code> | <code>*[]*string</code> | Kubernetes api versions used for Capabilities.APIVersions. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.atomic">Atomic</a></code> | <code>interface{}</code> | If set, installation process purges chart on fail. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.crds">Crds</a></code> | <code>*[]*string</code> | List of rendered CRDs from the chart. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.createNamespace">CreateNamespace</a></code> | <code>interface{}</code> | Create the namespace if it does not exist. Defaults to `false`. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.dependencyUpdate">DependencyUpdate</a></code> | <code>interface{}</code> | Run helm dependency update before installing the chart. Defaults to `false`. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.description">Description</a></code> | <code>*string</code> | Add a custom description. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.devel">Devel</a></code> | <code>interface{}</code> | Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.disableOpenapiValidation">DisableOpenapiValidation</a></code> | <code>interface{}</code> | If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema.Defaults to `false`. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.disableWebhooks">DisableWebhooks</a></code> | <code>interface{}</code> | Prevent hooks from running.Defaults to `300` seconds. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#id DataHelmTemplate#id}. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.includeCrds">IncludeCrds</a></code> | <code>interface{}</code> | Include CRDs in the templated output. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.isUpgrade">IsUpgrade</a></code> | <code>interface{}</code> | Set .Release.IsUpgrade instead of .Release.IsInstall. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.keyring">Keyring</a></code> | <code>*string</code> | Location of public keys used for verification. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.kubeVersion">KubeVersion</a></code> | <code>*string</code> | Kubernetes version used for Capabilities.KubeVersion. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.manifest">Manifest</a></code> | <code>*string</code> | Concatenated rendered chart templates. This corresponds to the output of the `helm template` command. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.manifests">Manifests</a></code> | <code>*map[string]*string</code> | Map of rendered chart templates indexed by the template name. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Namespace to install the release into. Defaults to `default`. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.notes">Notes</a></code> | <code>*string</code> | Rendered notes if the chart contains a `NOTES.txt`. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.passCredentials">PassCredentials</a></code> | <code>interface{}</code> | Pass credentials to all domains. Defaults to `false`. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.postrender">Postrender</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a></code> | postrender block. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.renderSubchartNotes">RenderSubchartNotes</a></code> | <code>interface{}</code> | If set, render subchart notes along with the parent. Defaults to `true`. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.replace">Replace</a></code> | <code>interface{}</code> | Re-use the given name, even if that name is already used. This is unsafe in production. Defaults to `false`. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repository">Repository</a></code> | <code>*string</code> | Repository where to locate the requested chart. If is a URL the chart is installed without installing the repository. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryCaFile">RepositoryCaFile</a></code> | <code>*string</code> | The Repositories CA File. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryCertFile">RepositoryCertFile</a></code> | <code>*string</code> | The repositories cert file. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryKeyFile">RepositoryKeyFile</a></code> | <code>*string</code> | The repositories cert key file. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryPassword">RepositoryPassword</a></code> | <code>*string</code> | Password for HTTP basic authentication. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryUsername">RepositoryUsername</a></code> | <code>*string</code> | Username for HTTP basic authentication. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.resetValues">ResetValues</a></code> | <code>interface{}</code> | When upgrading, reset the values to the ones built into the chart.Defaults to `false`. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.reuseValues">ReuseValues</a></code> | <code>interface{}</code> | When upgrading, reuse the last release's values and merge in any overrides. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.set">Set</a></code> | <code>interface{}</code> | set block. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.setList">SetList</a></code> | <code>interface{}</code> | set_list block. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.setSensitive">SetSensitive</a></code> | <code>interface{}</code> | set_sensitive block. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.setString">SetString</a></code> | <code>interface{}</code> | set_string block. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.showOnly">ShowOnly</a></code> | <code>*[]*string</code> | Only show manifests rendered from the given templates. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.skipCrds">SkipCrds</a></code> | <code>interface{}</code> | If set, no CRDs will be installed. By default, CRDs are installed if not already present. Defaults to `false`. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.skipTests">SkipTests</a></code> | <code>interface{}</code> | If set, tests will not be rendered. By default, tests are rendered. Defaults to `false`. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.timeout">Timeout</a></code> | <code>*f64</code> | Time in seconds to wait for any individual kubernetes operation. Defaults to `300` seconds. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.validate">Validate</a></code> | <code>interface{}</code> | Validate your manifests against the Kubernetes cluster you are currently pointing at. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.values">Values</a></code> | <code>*[]*string</code> | List of values in raw yaml format to pass to helm. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.verify">Verify</a></code> | <code>interface{}</code> | Verify the package before installing it.Defaults to `false`. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.version">Version</a></code> | <code>*string</code> | Specify the exact chart version to install. If this is not specified, the latest version is installed. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.wait">Wait</a></code> | <code>interface{}</code> | Will wait until all resources are in a ready state before marking the release as successful.Defaults to `true`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Chart`<sup>Required</sup> <a name="Chart" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.chart"></a>

```go
Chart *string
```

- *Type:* *string

Chart name to be installed. A path may be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#chart DataHelmTemplate#chart}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Release name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#name DataHelmTemplate#name}

---

##### `ApiVersions`<sup>Optional</sup> <a name="ApiVersions" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.apiVersions"></a>

```go
ApiVersions *[]*string
```

- *Type:* *[]*string

Kubernetes api versions used for Capabilities.APIVersions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#api_versions DataHelmTemplate#api_versions}

---

##### `Atomic`<sup>Optional</sup> <a name="Atomic" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.atomic"></a>

```go
Atomic interface{}
```

- *Type:* interface{}

If set, installation process purges chart on fail.

The wait flag will be set automatically if atomic is used. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#atomic DataHelmTemplate#atomic}

---

##### `Crds`<sup>Optional</sup> <a name="Crds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.crds"></a>

```go
Crds *[]*string
```

- *Type:* *[]*string

List of rendered CRDs from the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#crds DataHelmTemplate#crds}

---

##### `CreateNamespace`<sup>Optional</sup> <a name="CreateNamespace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.createNamespace"></a>

```go
CreateNamespace interface{}
```

- *Type:* interface{}

Create the namespace if it does not exist. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#create_namespace DataHelmTemplate#create_namespace}

---

##### `DependencyUpdate`<sup>Optional</sup> <a name="DependencyUpdate" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.dependencyUpdate"></a>

```go
DependencyUpdate interface{}
```

- *Type:* interface{}

Run helm dependency update before installing the chart. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#dependency_update DataHelmTemplate#dependency_update}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Add a custom description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#description DataHelmTemplate#description}

---

##### `Devel`<sup>Optional</sup> <a name="Devel" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.devel"></a>

```go
Devel interface{}
```

- *Type:* interface{}

Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#devel DataHelmTemplate#devel}

---

##### `DisableOpenapiValidation`<sup>Optional</sup> <a name="DisableOpenapiValidation" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.disableOpenapiValidation"></a>

```go
DisableOpenapiValidation interface{}
```

- *Type:* interface{}

If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema.Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#disable_openapi_validation DataHelmTemplate#disable_openapi_validation}

---

##### `DisableWebhooks`<sup>Optional</sup> <a name="DisableWebhooks" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.disableWebhooks"></a>

```go
DisableWebhooks interface{}
```

- *Type:* interface{}

Prevent hooks from running.Defaults to `300` seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#disable_webhooks DataHelmTemplate#disable_webhooks}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#id DataHelmTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeCrds`<sup>Optional</sup> <a name="IncludeCrds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.includeCrds"></a>

```go
IncludeCrds interface{}
```

- *Type:* interface{}

Include CRDs in the templated output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#include_crds DataHelmTemplate#include_crds}

---

##### `IsUpgrade`<sup>Optional</sup> <a name="IsUpgrade" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.isUpgrade"></a>

```go
IsUpgrade interface{}
```

- *Type:* interface{}

Set .Release.IsUpgrade instead of .Release.IsInstall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#is_upgrade DataHelmTemplate#is_upgrade}

---

##### `Keyring`<sup>Optional</sup> <a name="Keyring" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.keyring"></a>

```go
Keyring *string
```

- *Type:* *string

Location of public keys used for verification.

Used only if `verify` is true. Defaults to `/.gnupg/pubring.gpg` in the location set by `home`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#keyring DataHelmTemplate#keyring}

---

##### `KubeVersion`<sup>Optional</sup> <a name="KubeVersion" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.kubeVersion"></a>

```go
KubeVersion *string
```

- *Type:* *string

Kubernetes version used for Capabilities.KubeVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#kube_version DataHelmTemplate#kube_version}

---

##### `Manifest`<sup>Optional</sup> <a name="Manifest" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.manifest"></a>

```go
Manifest *string
```

- *Type:* *string

Concatenated rendered chart templates. This corresponds to the output of the `helm template` command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#manifest DataHelmTemplate#manifest}

---

##### `Manifests`<sup>Optional</sup> <a name="Manifests" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.manifests"></a>

```go
Manifests *map[string]*string
```

- *Type:* *map[string]*string

Map of rendered chart templates indexed by the template name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#manifests DataHelmTemplate#manifests}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Namespace to install the release into. Defaults to `default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#namespace DataHelmTemplate#namespace}

---

##### `Notes`<sup>Optional</sup> <a name="Notes" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.notes"></a>

```go
Notes *string
```

- *Type:* *string

Rendered notes if the chart contains a `NOTES.txt`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#notes DataHelmTemplate#notes}

---

##### `PassCredentials`<sup>Optional</sup> <a name="PassCredentials" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.passCredentials"></a>

```go
PassCredentials interface{}
```

- *Type:* interface{}

Pass credentials to all domains. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#pass_credentials DataHelmTemplate#pass_credentials}

---

##### `Postrender`<sup>Optional</sup> <a name="Postrender" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.postrender"></a>

```go
Postrender DataHelmTemplatePostrender
```

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a>

postrender block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#postrender DataHelmTemplate#postrender}

---

##### `RenderSubchartNotes`<sup>Optional</sup> <a name="RenderSubchartNotes" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.renderSubchartNotes"></a>

```go
RenderSubchartNotes interface{}
```

- *Type:* interface{}

If set, render subchart notes along with the parent. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#render_subchart_notes DataHelmTemplate#render_subchart_notes}

---

##### `Replace`<sup>Optional</sup> <a name="Replace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.replace"></a>

```go
Replace interface{}
```

- *Type:* interface{}

Re-use the given name, even if that name is already used. This is unsafe in production. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#replace DataHelmTemplate#replace}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

Repository where to locate the requested chart. If is a URL the chart is installed without installing the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#repository DataHelmTemplate#repository}

---

##### `RepositoryCaFile`<sup>Optional</sup> <a name="RepositoryCaFile" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryCaFile"></a>

```go
RepositoryCaFile *string
```

- *Type:* *string

The Repositories CA File.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#repository_ca_file DataHelmTemplate#repository_ca_file}

---

##### `RepositoryCertFile`<sup>Optional</sup> <a name="RepositoryCertFile" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryCertFile"></a>

```go
RepositoryCertFile *string
```

- *Type:* *string

The repositories cert file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#repository_cert_file DataHelmTemplate#repository_cert_file}

---

##### `RepositoryKeyFile`<sup>Optional</sup> <a name="RepositoryKeyFile" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryKeyFile"></a>

```go
RepositoryKeyFile *string
```

- *Type:* *string

The repositories cert key file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#repository_key_file DataHelmTemplate#repository_key_file}

---

##### `RepositoryPassword`<sup>Optional</sup> <a name="RepositoryPassword" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryPassword"></a>

```go
RepositoryPassword *string
```

- *Type:* *string

Password for HTTP basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#repository_password DataHelmTemplate#repository_password}

---

##### `RepositoryUsername`<sup>Optional</sup> <a name="RepositoryUsername" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryUsername"></a>

```go
RepositoryUsername *string
```

- *Type:* *string

Username for HTTP basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#repository_username DataHelmTemplate#repository_username}

---

##### `ResetValues`<sup>Optional</sup> <a name="ResetValues" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.resetValues"></a>

```go
ResetValues interface{}
```

- *Type:* interface{}

When upgrading, reset the values to the ones built into the chart.Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#reset_values DataHelmTemplate#reset_values}

---

##### `ReuseValues`<sup>Optional</sup> <a name="ReuseValues" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.reuseValues"></a>

```go
ReuseValues interface{}
```

- *Type:* interface{}

When upgrading, reuse the last release's values and merge in any overrides.

If 'reset_values' is specified, this is ignored. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#reuse_values DataHelmTemplate#reuse_values}

---

##### `Set`<sup>Optional</sup> <a name="Set" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.set"></a>

```go
Set interface{}
```

- *Type:* interface{}

set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#set DataHelmTemplate#set}

---

##### `SetList`<sup>Optional</sup> <a name="SetList" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.setList"></a>

```go
SetList interface{}
```

- *Type:* interface{}

set_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#set_list DataHelmTemplate#set_list}

---

##### `SetSensitive`<sup>Optional</sup> <a name="SetSensitive" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.setSensitive"></a>

```go
SetSensitive interface{}
```

- *Type:* interface{}

set_sensitive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#set_sensitive DataHelmTemplate#set_sensitive}

---

##### `SetString`<sup>Optional</sup> <a name="SetString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.setString"></a>

```go
SetString interface{}
```

- *Type:* interface{}

set_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#set_string DataHelmTemplate#set_string}

---

##### `ShowOnly`<sup>Optional</sup> <a name="ShowOnly" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.showOnly"></a>

```go
ShowOnly *[]*string
```

- *Type:* *[]*string

Only show manifests rendered from the given templates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#show_only DataHelmTemplate#show_only}

---

##### `SkipCrds`<sup>Optional</sup> <a name="SkipCrds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.skipCrds"></a>

```go
SkipCrds interface{}
```

- *Type:* interface{}

If set, no CRDs will be installed. By default, CRDs are installed if not already present. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#skip_crds DataHelmTemplate#skip_crds}

---

##### `SkipTests`<sup>Optional</sup> <a name="SkipTests" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.skipTests"></a>

```go
SkipTests interface{}
```

- *Type:* interface{}

If set, tests will not be rendered. By default, tests are rendered. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#skip_tests DataHelmTemplate#skip_tests}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

Time in seconds to wait for any individual kubernetes operation. Defaults to `300` seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#timeout DataHelmTemplate#timeout}

---

##### `Validate`<sup>Optional</sup> <a name="Validate" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.validate"></a>

```go
Validate interface{}
```

- *Type:* interface{}

Validate your manifests against the Kubernetes cluster you are currently pointing at.

This is the same validation performed on an install

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#validate DataHelmTemplate#validate}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

List of values in raw yaml format to pass to helm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#values DataHelmTemplate#values}

---

##### `Verify`<sup>Optional</sup> <a name="Verify" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.verify"></a>

```go
Verify interface{}
```

- *Type:* interface{}

Verify the package before installing it.Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#verify DataHelmTemplate#verify}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Specify the exact chart version to install. If this is not specified, the latest version is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#version DataHelmTemplate#version}

---

##### `Wait`<sup>Optional</sup> <a name="Wait" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.wait"></a>

```go
Wait interface{}
```

- *Type:* interface{}

Will wait until all resources are in a ready state before marking the release as successful.Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#wait DataHelmTemplate#wait}

---

### DataHelmTemplatePostrender <a name="DataHelmTemplatePostrender" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/v10/datahelmtemplate"

&datahelmtemplate.DataHelmTemplatePostrender {
	BinaryPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender.property.binaryPath">BinaryPath</a></code> | <code>*string</code> | The command binary path. |

---

##### `BinaryPath`<sup>Required</sup> <a name="BinaryPath" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender.property.binaryPath"></a>

```go
BinaryPath *string
```

- *Type:* *string

The command binary path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#binary_path DataHelmTemplate#binary_path}

---

### DataHelmTemplateSet <a name="DataHelmTemplateSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/v10/datahelmtemplate"

&datahelmtemplate.DataHelmTemplateSet {
	Name: *string,
	Value: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#name DataHelmTemplate#name}. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#value DataHelmTemplate#value}. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#type DataHelmTemplate#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#name DataHelmTemplate#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#value DataHelmTemplate#value}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#type DataHelmTemplate#type}.

---

### DataHelmTemplateSetListStruct <a name="DataHelmTemplateSetListStruct" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/v10/datahelmtemplate"

&datahelmtemplate.DataHelmTemplateSetListStruct {
	Name: *string,
	Value: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#name DataHelmTemplate#name}. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct.property.value">Value</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#value DataHelmTemplate#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#name DataHelmTemplate#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct.property.value"></a>

```go
Value *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#value DataHelmTemplate#value}.

---

### DataHelmTemplateSetSensitive <a name="DataHelmTemplateSetSensitive" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/v10/datahelmtemplate"

&datahelmtemplate.DataHelmTemplateSetSensitive {
	Name: *string,
	Value: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#name DataHelmTemplate#name}. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#value DataHelmTemplate#value}. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#type DataHelmTemplate#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#name DataHelmTemplate#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#value DataHelmTemplate#value}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#type DataHelmTemplate#type}.

---

### DataHelmTemplateSetString <a name="DataHelmTemplateSetString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/v10/datahelmtemplate"

&datahelmtemplate.DataHelmTemplateSetString {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#name DataHelmTemplate#name}. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#value DataHelmTemplate#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#name DataHelmTemplate#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.1/docs/data-sources/template#value DataHelmTemplate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHelmTemplatePostrenderOutputReference <a name="DataHelmTemplatePostrenderOutputReference" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/v10/datahelmtemplate"

datahelmtemplate.NewDataHelmTemplatePostrenderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataHelmTemplatePostrenderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.binaryPathInput">BinaryPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.binaryPath">BinaryPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BinaryPathInput`<sup>Optional</sup> <a name="BinaryPathInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.binaryPathInput"></a>

```go
func BinaryPathInput() *string
```

- *Type:* *string

---

##### `BinaryPath`<sup>Required</sup> <a name="BinaryPath" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.binaryPath"></a>

```go
func BinaryPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.internalValue"></a>

```go
func InternalValue() DataHelmTemplatePostrender
```

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a>

---


### DataHelmTemplateSetList <a name="DataHelmTemplateSetList" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/v10/datahelmtemplate"

datahelmtemplate.NewDataHelmTemplateSetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataHelmTemplateSetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.get"></a>

```go
func Get(index *f64) DataHelmTemplateSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataHelmTemplateSetListStructList <a name="DataHelmTemplateSetListStructList" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/v10/datahelmtemplate"

datahelmtemplate.NewDataHelmTemplateSetListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataHelmTemplateSetListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.get"></a>

```go
func Get(index *f64) DataHelmTemplateSetListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataHelmTemplateSetListStructOutputReference <a name="DataHelmTemplateSetListStructOutputReference" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/v10/datahelmtemplate"

datahelmtemplate.NewDataHelmTemplateSetListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataHelmTemplateSetListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.valueInput">ValueInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.value">Value</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.valueInput"></a>

```go
func ValueInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.value"></a>

```go
func Value() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataHelmTemplateSetOutputReference <a name="DataHelmTemplateSetOutputReference" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/v10/datahelmtemplate"

datahelmtemplate.NewDataHelmTemplateSetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataHelmTemplateSetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataHelmTemplateSetSensitiveList <a name="DataHelmTemplateSetSensitiveList" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/v10/datahelmtemplate"

datahelmtemplate.NewDataHelmTemplateSetSensitiveList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataHelmTemplateSetSensitiveList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.get"></a>

```go
func Get(index *f64) DataHelmTemplateSetSensitiveOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataHelmTemplateSetSensitiveOutputReference <a name="DataHelmTemplateSetSensitiveOutputReference" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/v10/datahelmtemplate"

datahelmtemplate.NewDataHelmTemplateSetSensitiveOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataHelmTemplateSetSensitiveOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataHelmTemplateSetStringList <a name="DataHelmTemplateSetStringList" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/v10/datahelmtemplate"

datahelmtemplate.NewDataHelmTemplateSetStringList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataHelmTemplateSetStringList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.get"></a>

```go
func Get(index *f64) DataHelmTemplateSetStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataHelmTemplateSetStringOutputReference <a name="DataHelmTemplateSetStringOutputReference" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/v10/datahelmtemplate"

datahelmtemplate.NewDataHelmTemplateSetStringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataHelmTemplateSetStringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



