# `release` Submodule <a name="`release` Submodule" id="@cdktf/provider-helm.release"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Release <a name="Release" id="@cdktf/provider-helm.release.Release"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release helm_release}.

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.Release.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/release"

release.NewRelease(scope Construct, id *string, config ReleaseConfig) Release
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleaseConfig">ReleaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-helm.release.Release.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-helm.release.Release.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-helm.release.Release.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-helm.release.ReleaseConfig">ReleaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.Release.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-helm.release.Release.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-helm.release.Release.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-helm.release.Release.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-helm.release.Release.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-helm.release.Release.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-helm.release.Release.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-helm.release.Release.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-helm.release.Release.putPostrender">PutPostrender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.putSet">PutSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.putSetList">PutSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.putSetSensitive">PutSetSensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetAtomic">ResetAtomic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetCleanupOnFail">ResetCleanupOnFail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetCreateNamespace">ResetCreateNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetDependencyUpdate">ResetDependencyUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetDevel">ResetDevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetDisableCrdHooks">ResetDisableCrdHooks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetDisableOpenapiValidation">ResetDisableOpenapiValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetDisableWebhooks">ResetDisableWebhooks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetForceUpdate">ResetForceUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetKeyring">ResetKeyring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetLint">ResetLint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetMaxHistory">ResetMaxHistory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetPassCredentials">ResetPassCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetPostrender">ResetPostrender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetRecreatePods">ResetRecreatePods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetRenderSubchartNotes">ResetRenderSubchartNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetReplace">ResetReplace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetRepository">ResetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetRepositoryCaFile">ResetRepositoryCaFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetRepositoryCertFile">ResetRepositoryCertFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetRepositoryKeyFile">ResetRepositoryKeyFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetRepositoryPassword">ResetRepositoryPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetRepositoryUsername">ResetRepositoryUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetResetValues">ResetResetValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetReuseValues">ResetReuseValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetSet">ResetSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetSetList">ResetSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetSetSensitive">ResetSetSensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetSkipCrds">ResetSkipCrds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetTfValues">ResetTfValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetVerify">ResetVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetVersion">ResetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetWait">ResetWait</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetWaitForJobs">ResetWaitForJobs</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-helm.release.Release.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-helm.release.Release.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-helm.release.Release.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.Release.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-helm.release.Release.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-helm.release.Release.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-helm.release.Release.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-helm.release.Release.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-helm.release.Release.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-helm.release.Release.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-helm.release.Release.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-helm.release.Release.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-helm.release.Release.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.Release.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-helm.release.Release.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.Release.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-helm.release.Release.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.Release.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-helm.release.Release.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.Release.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-helm.release.Release.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.Release.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-helm.release.Release.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.Release.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-helm.release.Release.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.Release.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-helm.release.Release.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.Release.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-helm.release.Release.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.Release.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-helm.release.Release.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-helm.release.Release.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-helm.release.Release.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-helm.release.Release.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-helm.release.Release.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.Release.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-helm.release.Release.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-helm.release.Release.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-helm.release.Release.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-helm.release.Release.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-helm.release.Release.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-helm.release.Release.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-helm.release.Release.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPostrender` <a name="PutPostrender" id="@cdktf/provider-helm.release.Release.putPostrender"></a>

```go
func PutPostrender(value ReleasePostrender)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.Release.putPostrender.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-helm.release.ReleasePostrender">ReleasePostrender</a>

---

##### `PutSet` <a name="PutSet" id="@cdktf/provider-helm.release.Release.putSet"></a>

```go
func PutSet(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.Release.putSet.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSetList` <a name="PutSetList" id="@cdktf/provider-helm.release.Release.putSetList"></a>

```go
func PutSetList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.Release.putSetList.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSetSensitive` <a name="PutSetSensitive" id="@cdktf/provider-helm.release.Release.putSetSensitive"></a>

```go
func PutSetSensitive(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.Release.putSetSensitive.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAtomic` <a name="ResetAtomic" id="@cdktf/provider-helm.release.Release.resetAtomic"></a>

```go
func ResetAtomic()
```

##### `ResetCleanupOnFail` <a name="ResetCleanupOnFail" id="@cdktf/provider-helm.release.Release.resetCleanupOnFail"></a>

```go
func ResetCleanupOnFail()
```

##### `ResetCreateNamespace` <a name="ResetCreateNamespace" id="@cdktf/provider-helm.release.Release.resetCreateNamespace"></a>

```go
func ResetCreateNamespace()
```

##### `ResetDependencyUpdate` <a name="ResetDependencyUpdate" id="@cdktf/provider-helm.release.Release.resetDependencyUpdate"></a>

```go
func ResetDependencyUpdate()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-helm.release.Release.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDevel` <a name="ResetDevel" id="@cdktf/provider-helm.release.Release.resetDevel"></a>

```go
func ResetDevel()
```

##### `ResetDisableCrdHooks` <a name="ResetDisableCrdHooks" id="@cdktf/provider-helm.release.Release.resetDisableCrdHooks"></a>

```go
func ResetDisableCrdHooks()
```

##### `ResetDisableOpenapiValidation` <a name="ResetDisableOpenapiValidation" id="@cdktf/provider-helm.release.Release.resetDisableOpenapiValidation"></a>

```go
func ResetDisableOpenapiValidation()
```

##### `ResetDisableWebhooks` <a name="ResetDisableWebhooks" id="@cdktf/provider-helm.release.Release.resetDisableWebhooks"></a>

```go
func ResetDisableWebhooks()
```

##### `ResetForceUpdate` <a name="ResetForceUpdate" id="@cdktf/provider-helm.release.Release.resetForceUpdate"></a>

```go
func ResetForceUpdate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-helm.release.Release.resetId"></a>

```go
func ResetId()
```

##### `ResetKeyring` <a name="ResetKeyring" id="@cdktf/provider-helm.release.Release.resetKeyring"></a>

```go
func ResetKeyring()
```

##### `ResetLint` <a name="ResetLint" id="@cdktf/provider-helm.release.Release.resetLint"></a>

```go
func ResetLint()
```

##### `ResetMaxHistory` <a name="ResetMaxHistory" id="@cdktf/provider-helm.release.Release.resetMaxHistory"></a>

```go
func ResetMaxHistory()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-helm.release.Release.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPassCredentials` <a name="ResetPassCredentials" id="@cdktf/provider-helm.release.Release.resetPassCredentials"></a>

```go
func ResetPassCredentials()
```

##### `ResetPostrender` <a name="ResetPostrender" id="@cdktf/provider-helm.release.Release.resetPostrender"></a>

```go
func ResetPostrender()
```

##### `ResetRecreatePods` <a name="ResetRecreatePods" id="@cdktf/provider-helm.release.Release.resetRecreatePods"></a>

```go
func ResetRecreatePods()
```

##### `ResetRenderSubchartNotes` <a name="ResetRenderSubchartNotes" id="@cdktf/provider-helm.release.Release.resetRenderSubchartNotes"></a>

```go
func ResetRenderSubchartNotes()
```

##### `ResetReplace` <a name="ResetReplace" id="@cdktf/provider-helm.release.Release.resetReplace"></a>

```go
func ResetReplace()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktf/provider-helm.release.Release.resetRepository"></a>

```go
func ResetRepository()
```

##### `ResetRepositoryCaFile` <a name="ResetRepositoryCaFile" id="@cdktf/provider-helm.release.Release.resetRepositoryCaFile"></a>

```go
func ResetRepositoryCaFile()
```

##### `ResetRepositoryCertFile` <a name="ResetRepositoryCertFile" id="@cdktf/provider-helm.release.Release.resetRepositoryCertFile"></a>

```go
func ResetRepositoryCertFile()
```

##### `ResetRepositoryKeyFile` <a name="ResetRepositoryKeyFile" id="@cdktf/provider-helm.release.Release.resetRepositoryKeyFile"></a>

```go
func ResetRepositoryKeyFile()
```

##### `ResetRepositoryPassword` <a name="ResetRepositoryPassword" id="@cdktf/provider-helm.release.Release.resetRepositoryPassword"></a>

```go
func ResetRepositoryPassword()
```

##### `ResetRepositoryUsername` <a name="ResetRepositoryUsername" id="@cdktf/provider-helm.release.Release.resetRepositoryUsername"></a>

```go
func ResetRepositoryUsername()
```

##### `ResetResetValues` <a name="ResetResetValues" id="@cdktf/provider-helm.release.Release.resetResetValues"></a>

```go
func ResetResetValues()
```

##### `ResetReuseValues` <a name="ResetReuseValues" id="@cdktf/provider-helm.release.Release.resetReuseValues"></a>

```go
func ResetReuseValues()
```

##### `ResetSet` <a name="ResetSet" id="@cdktf/provider-helm.release.Release.resetSet"></a>

```go
func ResetSet()
```

##### `ResetSetList` <a name="ResetSetList" id="@cdktf/provider-helm.release.Release.resetSetList"></a>

```go
func ResetSetList()
```

##### `ResetSetSensitive` <a name="ResetSetSensitive" id="@cdktf/provider-helm.release.Release.resetSetSensitive"></a>

```go
func ResetSetSensitive()
```

##### `ResetSkipCrds` <a name="ResetSkipCrds" id="@cdktf/provider-helm.release.Release.resetSkipCrds"></a>

```go
func ResetSkipCrds()
```

##### `ResetTfValues` <a name="ResetTfValues" id="@cdktf/provider-helm.release.Release.resetTfValues"></a>

```go
func ResetTfValues()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-helm.release.Release.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetVerify` <a name="ResetVerify" id="@cdktf/provider-helm.release.Release.resetVerify"></a>

```go
func ResetVerify()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-helm.release.Release.resetVersion"></a>

```go
func ResetVersion()
```

##### `ResetWait` <a name="ResetWait" id="@cdktf/provider-helm.release.Release.resetWait"></a>

```go
func ResetWait()
```

##### `ResetWaitForJobs` <a name="ResetWaitForJobs" id="@cdktf/provider-helm.release.Release.resetWaitForJobs"></a>

```go
func ResetWaitForJobs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.Release.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-helm.release.Release.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Release resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-helm.release.Release.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/release"

release.Release_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-helm.release.Release.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-helm.release.Release.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/release"

release.Release_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-helm.release.Release.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-helm.release.Release.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/release"

release.Release_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-helm.release.Release.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-helm.release.Release.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/release"

release.Release_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Release resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-helm.release.Release.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-helm.release.Release.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Release to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-helm.release.Release.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Release that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-helm.release.Release.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Release to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.Release.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-helm.release.Release.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.manifest">Manifest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataList">ReleaseMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.postrender">Postrender</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference">ReleasePostrenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.set">Set</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleaseSetList">ReleaseSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.setList">SetList</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList">ReleaseSetListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.setSensitive">SetSensitive</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList">ReleaseSetSensitiveList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.atomicInput">AtomicInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.chartInput">ChartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.cleanupOnFailInput">CleanupOnFailInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.createNamespaceInput">CreateNamespaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.dependencyUpdateInput">DependencyUpdateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.develInput">DevelInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.disableCrdHooksInput">DisableCrdHooksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.disableOpenapiValidationInput">DisableOpenapiValidationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.disableWebhooksInput">DisableWebhooksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.forceUpdateInput">ForceUpdateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.keyringInput">KeyringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.lintInput">LintInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.maxHistoryInput">MaxHistoryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.passCredentialsInput">PassCredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.postrenderInput">PostrenderInput</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleasePostrender">ReleasePostrender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.recreatePodsInput">RecreatePodsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.renderSubchartNotesInput">RenderSubchartNotesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.replaceInput">ReplaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryCaFileInput">RepositoryCaFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryCertFileInput">RepositoryCertFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryKeyFileInput">RepositoryKeyFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryPasswordInput">RepositoryPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryUsernameInput">RepositoryUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.resetValuesInput">ResetValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.reuseValuesInput">ReuseValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.setInput">SetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.setListInput">SetListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.setSensitiveInput">SetSensitiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.skipCrdsInput">SkipCrdsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.verifyInput">VerifyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.waitForJobsInput">WaitForJobsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.waitInput">WaitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.atomic">Atomic</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.chart">Chart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.cleanupOnFail">CleanupOnFail</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.createNamespace">CreateNamespace</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.dependencyUpdate">DependencyUpdate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.devel">Devel</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.disableCrdHooks">DisableCrdHooks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.disableOpenapiValidation">DisableOpenapiValidation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.disableWebhooks">DisableWebhooks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.forceUpdate">ForceUpdate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.keyring">Keyring</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.lint">Lint</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.maxHistory">MaxHistory</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.passCredentials">PassCredentials</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.recreatePods">RecreatePods</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.renderSubchartNotes">RenderSubchartNotes</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.replace">Replace</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryCaFile">RepositoryCaFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryCertFile">RepositoryCertFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryKeyFile">RepositoryKeyFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryPassword">RepositoryPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryUsername">RepositoryUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.resetValues">ResetValues</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.reuseValues">ReuseValues</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.skipCrds">SkipCrds</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.verify">Verify</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.wait">Wait</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.waitForJobs">WaitForJobs</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-helm.release.Release.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-helm.release.Release.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-helm.release.Release.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-helm.release.Release.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-helm.release.Release.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-helm.release.Release.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-helm.release.Release.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-helm.release.Release.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-helm.release.Release.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-helm.release.Release.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-helm.release.Release.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-helm.release.Release.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-helm.release.Release.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-helm.release.Release.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Manifest`<sup>Required</sup> <a name="Manifest" id="@cdktf/provider-helm.release.Release.property.manifest"></a>

```go
func Manifest() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-helm.release.Release.property.metadata"></a>

```go
func Metadata() ReleaseMetadataList
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleaseMetadataList">ReleaseMetadataList</a>

---

##### `Postrender`<sup>Required</sup> <a name="Postrender" id="@cdktf/provider-helm.release.Release.property.postrender"></a>

```go
func Postrender() ReleasePostrenderOutputReference
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference">ReleasePostrenderOutputReference</a>

---

##### `Set`<sup>Required</sup> <a name="Set" id="@cdktf/provider-helm.release.Release.property.set"></a>

```go
func Set() ReleaseSetList
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleaseSetList">ReleaseSetList</a>

---

##### `SetList`<sup>Required</sup> <a name="SetList" id="@cdktf/provider-helm.release.Release.property.setList"></a>

```go
func SetList() ReleaseSetListStructList
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleaseSetListStructList">ReleaseSetListStructList</a>

---

##### `SetSensitive`<sup>Required</sup> <a name="SetSensitive" id="@cdktf/provider-helm.release.Release.property.setSensitive"></a>

```go
func SetSensitive() ReleaseSetSensitiveList
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList">ReleaseSetSensitiveList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-helm.release.Release.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `AtomicInput`<sup>Optional</sup> <a name="AtomicInput" id="@cdktf/provider-helm.release.Release.property.atomicInput"></a>

```go
func AtomicInput() interface{}
```

- *Type:* interface{}

---

##### `ChartInput`<sup>Optional</sup> <a name="ChartInput" id="@cdktf/provider-helm.release.Release.property.chartInput"></a>

```go
func ChartInput() *string
```

- *Type:* *string

---

##### `CleanupOnFailInput`<sup>Optional</sup> <a name="CleanupOnFailInput" id="@cdktf/provider-helm.release.Release.property.cleanupOnFailInput"></a>

```go
func CleanupOnFailInput() interface{}
```

- *Type:* interface{}

---

##### `CreateNamespaceInput`<sup>Optional</sup> <a name="CreateNamespaceInput" id="@cdktf/provider-helm.release.Release.property.createNamespaceInput"></a>

```go
func CreateNamespaceInput() interface{}
```

- *Type:* interface{}

---

##### `DependencyUpdateInput`<sup>Optional</sup> <a name="DependencyUpdateInput" id="@cdktf/provider-helm.release.Release.property.dependencyUpdateInput"></a>

```go
func DependencyUpdateInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-helm.release.Release.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DevelInput`<sup>Optional</sup> <a name="DevelInput" id="@cdktf/provider-helm.release.Release.property.develInput"></a>

```go
func DevelInput() interface{}
```

- *Type:* interface{}

---

##### `DisableCrdHooksInput`<sup>Optional</sup> <a name="DisableCrdHooksInput" id="@cdktf/provider-helm.release.Release.property.disableCrdHooksInput"></a>

```go
func DisableCrdHooksInput() interface{}
```

- *Type:* interface{}

---

##### `DisableOpenapiValidationInput`<sup>Optional</sup> <a name="DisableOpenapiValidationInput" id="@cdktf/provider-helm.release.Release.property.disableOpenapiValidationInput"></a>

```go
func DisableOpenapiValidationInput() interface{}
```

- *Type:* interface{}

---

##### `DisableWebhooksInput`<sup>Optional</sup> <a name="DisableWebhooksInput" id="@cdktf/provider-helm.release.Release.property.disableWebhooksInput"></a>

```go
func DisableWebhooksInput() interface{}
```

- *Type:* interface{}

---

##### `ForceUpdateInput`<sup>Optional</sup> <a name="ForceUpdateInput" id="@cdktf/provider-helm.release.Release.property.forceUpdateInput"></a>

```go
func ForceUpdateInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-helm.release.Release.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyringInput`<sup>Optional</sup> <a name="KeyringInput" id="@cdktf/provider-helm.release.Release.property.keyringInput"></a>

```go
func KeyringInput() *string
```

- *Type:* *string

---

##### `LintInput`<sup>Optional</sup> <a name="LintInput" id="@cdktf/provider-helm.release.Release.property.lintInput"></a>

```go
func LintInput() interface{}
```

- *Type:* interface{}

---

##### `MaxHistoryInput`<sup>Optional</sup> <a name="MaxHistoryInput" id="@cdktf/provider-helm.release.Release.property.maxHistoryInput"></a>

```go
func MaxHistoryInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-helm.release.Release.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-helm.release.Release.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PassCredentialsInput`<sup>Optional</sup> <a name="PassCredentialsInput" id="@cdktf/provider-helm.release.Release.property.passCredentialsInput"></a>

```go
func PassCredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `PostrenderInput`<sup>Optional</sup> <a name="PostrenderInput" id="@cdktf/provider-helm.release.Release.property.postrenderInput"></a>

```go
func PostrenderInput() ReleasePostrender
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleasePostrender">ReleasePostrender</a>

---

##### `RecreatePodsInput`<sup>Optional</sup> <a name="RecreatePodsInput" id="@cdktf/provider-helm.release.Release.property.recreatePodsInput"></a>

```go
func RecreatePodsInput() interface{}
```

- *Type:* interface{}

---

##### `RenderSubchartNotesInput`<sup>Optional</sup> <a name="RenderSubchartNotesInput" id="@cdktf/provider-helm.release.Release.property.renderSubchartNotesInput"></a>

```go
func RenderSubchartNotesInput() interface{}
```

- *Type:* interface{}

---

##### `ReplaceInput`<sup>Optional</sup> <a name="ReplaceInput" id="@cdktf/provider-helm.release.Release.property.replaceInput"></a>

```go
func ReplaceInput() interface{}
```

- *Type:* interface{}

---

##### `RepositoryCaFileInput`<sup>Optional</sup> <a name="RepositoryCaFileInput" id="@cdktf/provider-helm.release.Release.property.repositoryCaFileInput"></a>

```go
func RepositoryCaFileInput() *string
```

- *Type:* *string

---

##### `RepositoryCertFileInput`<sup>Optional</sup> <a name="RepositoryCertFileInput" id="@cdktf/provider-helm.release.Release.property.repositoryCertFileInput"></a>

```go
func RepositoryCertFileInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-helm.release.Release.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `RepositoryKeyFileInput`<sup>Optional</sup> <a name="RepositoryKeyFileInput" id="@cdktf/provider-helm.release.Release.property.repositoryKeyFileInput"></a>

```go
func RepositoryKeyFileInput() *string
```

- *Type:* *string

---

##### `RepositoryPasswordInput`<sup>Optional</sup> <a name="RepositoryPasswordInput" id="@cdktf/provider-helm.release.Release.property.repositoryPasswordInput"></a>

```go
func RepositoryPasswordInput() *string
```

- *Type:* *string

---

##### `RepositoryUsernameInput`<sup>Optional</sup> <a name="RepositoryUsernameInput" id="@cdktf/provider-helm.release.Release.property.repositoryUsernameInput"></a>

```go
func RepositoryUsernameInput() *string
```

- *Type:* *string

---

##### `ResetValuesInput`<sup>Optional</sup> <a name="ResetValuesInput" id="@cdktf/provider-helm.release.Release.property.resetValuesInput"></a>

```go
func ResetValuesInput() interface{}
```

- *Type:* interface{}

---

##### `ReuseValuesInput`<sup>Optional</sup> <a name="ReuseValuesInput" id="@cdktf/provider-helm.release.Release.property.reuseValuesInput"></a>

```go
func ReuseValuesInput() interface{}
```

- *Type:* interface{}

---

##### `SetInput`<sup>Optional</sup> <a name="SetInput" id="@cdktf/provider-helm.release.Release.property.setInput"></a>

```go
func SetInput() interface{}
```

- *Type:* interface{}

---

##### `SetListInput`<sup>Optional</sup> <a name="SetListInput" id="@cdktf/provider-helm.release.Release.property.setListInput"></a>

```go
func SetListInput() interface{}
```

- *Type:* interface{}

---

##### `SetSensitiveInput`<sup>Optional</sup> <a name="SetSensitiveInput" id="@cdktf/provider-helm.release.Release.property.setSensitiveInput"></a>

```go
func SetSensitiveInput() interface{}
```

- *Type:* interface{}

---

##### `SkipCrdsInput`<sup>Optional</sup> <a name="SkipCrdsInput" id="@cdktf/provider-helm.release.Release.property.skipCrdsInput"></a>

```go
func SkipCrdsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-helm.release.Release.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-helm.release.Release.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `VerifyInput`<sup>Optional</sup> <a name="VerifyInput" id="@cdktf/provider-helm.release.Release.property.verifyInput"></a>

```go
func VerifyInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-helm.release.Release.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `WaitForJobsInput`<sup>Optional</sup> <a name="WaitForJobsInput" id="@cdktf/provider-helm.release.Release.property.waitForJobsInput"></a>

```go
func WaitForJobsInput() interface{}
```

- *Type:* interface{}

---

##### `WaitInput`<sup>Optional</sup> <a name="WaitInput" id="@cdktf/provider-helm.release.Release.property.waitInput"></a>

```go
func WaitInput() interface{}
```

- *Type:* interface{}

---

##### `Atomic`<sup>Required</sup> <a name="Atomic" id="@cdktf/provider-helm.release.Release.property.atomic"></a>

```go
func Atomic() interface{}
```

- *Type:* interface{}

---

##### `Chart`<sup>Required</sup> <a name="Chart" id="@cdktf/provider-helm.release.Release.property.chart"></a>

```go
func Chart() *string
```

- *Type:* *string

---

##### `CleanupOnFail`<sup>Required</sup> <a name="CleanupOnFail" id="@cdktf/provider-helm.release.Release.property.cleanupOnFail"></a>

```go
func CleanupOnFail() interface{}
```

- *Type:* interface{}

---

##### `CreateNamespace`<sup>Required</sup> <a name="CreateNamespace" id="@cdktf/provider-helm.release.Release.property.createNamespace"></a>

```go
func CreateNamespace() interface{}
```

- *Type:* interface{}

---

##### `DependencyUpdate`<sup>Required</sup> <a name="DependencyUpdate" id="@cdktf/provider-helm.release.Release.property.dependencyUpdate"></a>

```go
func DependencyUpdate() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-helm.release.Release.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Devel`<sup>Required</sup> <a name="Devel" id="@cdktf/provider-helm.release.Release.property.devel"></a>

```go
func Devel() interface{}
```

- *Type:* interface{}

---

##### `DisableCrdHooks`<sup>Required</sup> <a name="DisableCrdHooks" id="@cdktf/provider-helm.release.Release.property.disableCrdHooks"></a>

```go
func DisableCrdHooks() interface{}
```

- *Type:* interface{}

---

##### `DisableOpenapiValidation`<sup>Required</sup> <a name="DisableOpenapiValidation" id="@cdktf/provider-helm.release.Release.property.disableOpenapiValidation"></a>

```go
func DisableOpenapiValidation() interface{}
```

- *Type:* interface{}

---

##### `DisableWebhooks`<sup>Required</sup> <a name="DisableWebhooks" id="@cdktf/provider-helm.release.Release.property.disableWebhooks"></a>

```go
func DisableWebhooks() interface{}
```

- *Type:* interface{}

---

##### `ForceUpdate`<sup>Required</sup> <a name="ForceUpdate" id="@cdktf/provider-helm.release.Release.property.forceUpdate"></a>

```go
func ForceUpdate() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-helm.release.Release.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Keyring`<sup>Required</sup> <a name="Keyring" id="@cdktf/provider-helm.release.Release.property.keyring"></a>

```go
func Keyring() *string
```

- *Type:* *string

---

##### `Lint`<sup>Required</sup> <a name="Lint" id="@cdktf/provider-helm.release.Release.property.lint"></a>

```go
func Lint() interface{}
```

- *Type:* interface{}

---

##### `MaxHistory`<sup>Required</sup> <a name="MaxHistory" id="@cdktf/provider-helm.release.Release.property.maxHistory"></a>

```go
func MaxHistory() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-helm.release.Release.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-helm.release.Release.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `PassCredentials`<sup>Required</sup> <a name="PassCredentials" id="@cdktf/provider-helm.release.Release.property.passCredentials"></a>

```go
func PassCredentials() interface{}
```

- *Type:* interface{}

---

##### `RecreatePods`<sup>Required</sup> <a name="RecreatePods" id="@cdktf/provider-helm.release.Release.property.recreatePods"></a>

```go
func RecreatePods() interface{}
```

- *Type:* interface{}

---

##### `RenderSubchartNotes`<sup>Required</sup> <a name="RenderSubchartNotes" id="@cdktf/provider-helm.release.Release.property.renderSubchartNotes"></a>

```go
func RenderSubchartNotes() interface{}
```

- *Type:* interface{}

---

##### `Replace`<sup>Required</sup> <a name="Replace" id="@cdktf/provider-helm.release.Release.property.replace"></a>

```go
func Replace() interface{}
```

- *Type:* interface{}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-helm.release.Release.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

##### `RepositoryCaFile`<sup>Required</sup> <a name="RepositoryCaFile" id="@cdktf/provider-helm.release.Release.property.repositoryCaFile"></a>

```go
func RepositoryCaFile() *string
```

- *Type:* *string

---

##### `RepositoryCertFile`<sup>Required</sup> <a name="RepositoryCertFile" id="@cdktf/provider-helm.release.Release.property.repositoryCertFile"></a>

```go
func RepositoryCertFile() *string
```

- *Type:* *string

---

##### `RepositoryKeyFile`<sup>Required</sup> <a name="RepositoryKeyFile" id="@cdktf/provider-helm.release.Release.property.repositoryKeyFile"></a>

```go
func RepositoryKeyFile() *string
```

- *Type:* *string

---

##### `RepositoryPassword`<sup>Required</sup> <a name="RepositoryPassword" id="@cdktf/provider-helm.release.Release.property.repositoryPassword"></a>

```go
func RepositoryPassword() *string
```

- *Type:* *string

---

##### `RepositoryUsername`<sup>Required</sup> <a name="RepositoryUsername" id="@cdktf/provider-helm.release.Release.property.repositoryUsername"></a>

```go
func RepositoryUsername() *string
```

- *Type:* *string

---

##### `ResetValues`<sup>Required</sup> <a name="ResetValues" id="@cdktf/provider-helm.release.Release.property.resetValues"></a>

```go
func ResetValues() interface{}
```

- *Type:* interface{}

---

##### `ReuseValues`<sup>Required</sup> <a name="ReuseValues" id="@cdktf/provider-helm.release.Release.property.reuseValues"></a>

```go
func ReuseValues() interface{}
```

- *Type:* interface{}

---

##### `SkipCrds`<sup>Required</sup> <a name="SkipCrds" id="@cdktf/provider-helm.release.Release.property.skipCrds"></a>

```go
func SkipCrds() interface{}
```

- *Type:* interface{}

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-helm.release.Release.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-helm.release.Release.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `Verify`<sup>Required</sup> <a name="Verify" id="@cdktf/provider-helm.release.Release.property.verify"></a>

```go
func Verify() interface{}
```

- *Type:* interface{}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-helm.release.Release.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `Wait`<sup>Required</sup> <a name="Wait" id="@cdktf/provider-helm.release.Release.property.wait"></a>

```go
func Wait() interface{}
```

- *Type:* interface{}

---

##### `WaitForJobs`<sup>Required</sup> <a name="WaitForJobs" id="@cdktf/provider-helm.release.Release.property.waitForJobs"></a>

```go
func WaitForJobs() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.Release.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-helm.release.Release.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ReleaseConfig <a name="ReleaseConfig" id="@cdktf/provider-helm.release.ReleaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.release.ReleaseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/release"

&release.ReleaseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Chart: *string,
	Name: *string,
	Atomic: interface{},
	CleanupOnFail: interface{},
	CreateNamespace: interface{},
	DependencyUpdate: interface{},
	Description: *string,
	Devel: interface{},
	DisableCrdHooks: interface{},
	DisableOpenapiValidation: interface{},
	DisableWebhooks: interface{},
	ForceUpdate: interface{},
	Id: *string,
	Keyring: *string,
	Lint: interface{},
	MaxHistory: *f64,
	Namespace: *string,
	PassCredentials: interface{},
	Postrender: github.com/cdktf/cdktf-provider-helm-go/helm.release.ReleasePostrender,
	RecreatePods: interface{},
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
	SkipCrds: interface{},
	Timeout: *f64,
	Values: *[]*string,
	Verify: interface{},
	Version: *string,
	Wait: interface{},
	WaitForJobs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.chart">Chart</a></code> | <code>*string</code> | Chart name to be installed. A path may be used. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.name">Name</a></code> | <code>*string</code> | Release name. The length must not be longer than 53 characters. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.atomic">Atomic</a></code> | <code>interface{}</code> | If set, installation process purges chart on fail. The wait flag will be set automatically if atomic is used. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.cleanupOnFail">CleanupOnFail</a></code> | <code>interface{}</code> | Allow deletion of new resources created in this upgrade when upgrade fails. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.createNamespace">CreateNamespace</a></code> | <code>interface{}</code> | Create the namespace if it does not exist. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.dependencyUpdate">DependencyUpdate</a></code> | <code>interface{}</code> | Run helm dependency update before installing the chart. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.description">Description</a></code> | <code>*string</code> | Add a custom description. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.devel">Devel</a></code> | <code>interface{}</code> | Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.disableCrdHooks">DisableCrdHooks</a></code> | <code>interface{}</code> | Prevent CRD hooks from, running, but run other hooks.  See helm install --no-crd-hook. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.disableOpenapiValidation">DisableOpenapiValidation</a></code> | <code>interface{}</code> | If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.disableWebhooks">DisableWebhooks</a></code> | <code>interface{}</code> | Prevent hooks from running. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.forceUpdate">ForceUpdate</a></code> | <code>interface{}</code> | Force resource update through delete/recreate if needed. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#id Release#id}. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.keyring">Keyring</a></code> | <code>*string</code> | Location of public keys used for verification. Used only if `verify` is true. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.lint">Lint</a></code> | <code>interface{}</code> | Run helm lint when planning. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.maxHistory">MaxHistory</a></code> | <code>*f64</code> | Limit the maximum number of revisions saved per release. Use 0 for no limit. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Namespace to install the release into. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.passCredentials">PassCredentials</a></code> | <code>interface{}</code> | Pass credentials to all domains. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.postrender">Postrender</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleasePostrender">ReleasePostrender</a></code> | postrender block. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.recreatePods">RecreatePods</a></code> | <code>interface{}</code> | Perform pods restart during upgrade/rollback. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.renderSubchartNotes">RenderSubchartNotes</a></code> | <code>interface{}</code> | If set, render subchart notes along with the parent. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.replace">Replace</a></code> | <code>interface{}</code> | Re-use the given name, even if that name is already used. This is unsafe in production. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.repository">Repository</a></code> | <code>*string</code> | Repository where to locate the requested chart. If is a URL the chart is installed without installing the repository. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.repositoryCaFile">RepositoryCaFile</a></code> | <code>*string</code> | The Repositories CA File. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.repositoryCertFile">RepositoryCertFile</a></code> | <code>*string</code> | The repositories cert file. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.repositoryKeyFile">RepositoryKeyFile</a></code> | <code>*string</code> | The repositories cert key file. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.repositoryPassword">RepositoryPassword</a></code> | <code>*string</code> | Password for HTTP basic authentication. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.repositoryUsername">RepositoryUsername</a></code> | <code>*string</code> | Username for HTTP basic authentication. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.resetValues">ResetValues</a></code> | <code>interface{}</code> | When upgrading, reset the values to the ones built into the chart. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.reuseValues">ReuseValues</a></code> | <code>interface{}</code> | When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.set">Set</a></code> | <code>interface{}</code> | set block. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.setList">SetList</a></code> | <code>interface{}</code> | set_list block. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.setSensitive">SetSensitive</a></code> | <code>interface{}</code> | set_sensitive block. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.skipCrds">SkipCrds</a></code> | <code>interface{}</code> | If set, no CRDs will be installed. By default, CRDs are installed if not already present. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.timeout">Timeout</a></code> | <code>*f64</code> | Time in seconds to wait for any individual kubernetes operation. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.values">Values</a></code> | <code>*[]*string</code> | List of values in raw yaml format to pass to helm. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.verify">Verify</a></code> | <code>interface{}</code> | Verify the package before installing it. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.version">Version</a></code> | <code>*string</code> | Specify the exact chart version to install. If this is not specified, the latest version is installed. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.wait">Wait</a></code> | <code>interface{}</code> | Will wait until all resources are in a ready state before marking the release as successful. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.waitForJobs">WaitForJobs</a></code> | <code>interface{}</code> | If wait is enabled, will wait until all Jobs have been completed before marking the release as successful. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-helm.release.ReleaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-helm.release.ReleaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-helm.release.ReleaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-helm.release.ReleaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-helm.release.ReleaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-helm.release.ReleaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-helm.release.ReleaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Chart`<sup>Required</sup> <a name="Chart" id="@cdktf/provider-helm.release.ReleaseConfig.property.chart"></a>

```go
Chart *string
```

- *Type:* *string

Chart name to be installed. A path may be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#chart Release#chart}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-helm.release.ReleaseConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Release name. The length must not be longer than 53 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#name Release#name}

---

##### `Atomic`<sup>Optional</sup> <a name="Atomic" id="@cdktf/provider-helm.release.ReleaseConfig.property.atomic"></a>

```go
Atomic interface{}
```

- *Type:* interface{}

If set, installation process purges chart on fail. The wait flag will be set automatically if atomic is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#atomic Release#atomic}

---

##### `CleanupOnFail`<sup>Optional</sup> <a name="CleanupOnFail" id="@cdktf/provider-helm.release.ReleaseConfig.property.cleanupOnFail"></a>

```go
CleanupOnFail interface{}
```

- *Type:* interface{}

Allow deletion of new resources created in this upgrade when upgrade fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#cleanup_on_fail Release#cleanup_on_fail}

---

##### `CreateNamespace`<sup>Optional</sup> <a name="CreateNamespace" id="@cdktf/provider-helm.release.ReleaseConfig.property.createNamespace"></a>

```go
CreateNamespace interface{}
```

- *Type:* interface{}

Create the namespace if it does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#create_namespace Release#create_namespace}

---

##### `DependencyUpdate`<sup>Optional</sup> <a name="DependencyUpdate" id="@cdktf/provider-helm.release.ReleaseConfig.property.dependencyUpdate"></a>

```go
DependencyUpdate interface{}
```

- *Type:* interface{}

Run helm dependency update before installing the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#dependency_update Release#dependency_update}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-helm.release.ReleaseConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Add a custom description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#description Release#description}

---

##### `Devel`<sup>Optional</sup> <a name="Devel" id="@cdktf/provider-helm.release.ReleaseConfig.property.devel"></a>

```go
Devel interface{}
```

- *Type:* interface{}

Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#devel Release#devel}

---

##### `DisableCrdHooks`<sup>Optional</sup> <a name="DisableCrdHooks" id="@cdktf/provider-helm.release.ReleaseConfig.property.disableCrdHooks"></a>

```go
DisableCrdHooks interface{}
```

- *Type:* interface{}

Prevent CRD hooks from, running, but run other hooks.  See helm install --no-crd-hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#disable_crd_hooks Release#disable_crd_hooks}

---

##### `DisableOpenapiValidation`<sup>Optional</sup> <a name="DisableOpenapiValidation" id="@cdktf/provider-helm.release.ReleaseConfig.property.disableOpenapiValidation"></a>

```go
DisableOpenapiValidation interface{}
```

- *Type:* interface{}

If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#disable_openapi_validation Release#disable_openapi_validation}

---

##### `DisableWebhooks`<sup>Optional</sup> <a name="DisableWebhooks" id="@cdktf/provider-helm.release.ReleaseConfig.property.disableWebhooks"></a>

```go
DisableWebhooks interface{}
```

- *Type:* interface{}

Prevent hooks from running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#disable_webhooks Release#disable_webhooks}

---

##### `ForceUpdate`<sup>Optional</sup> <a name="ForceUpdate" id="@cdktf/provider-helm.release.ReleaseConfig.property.forceUpdate"></a>

```go
ForceUpdate interface{}
```

- *Type:* interface{}

Force resource update through delete/recreate if needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#force_update Release#force_update}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-helm.release.ReleaseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#id Release#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Keyring`<sup>Optional</sup> <a name="Keyring" id="@cdktf/provider-helm.release.ReleaseConfig.property.keyring"></a>

```go
Keyring *string
```

- *Type:* *string

Location of public keys used for verification. Used only if `verify` is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#keyring Release#keyring}

---

##### `Lint`<sup>Optional</sup> <a name="Lint" id="@cdktf/provider-helm.release.ReleaseConfig.property.lint"></a>

```go
Lint interface{}
```

- *Type:* interface{}

Run helm lint when planning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#lint Release#lint}

---

##### `MaxHistory`<sup>Optional</sup> <a name="MaxHistory" id="@cdktf/provider-helm.release.ReleaseConfig.property.maxHistory"></a>

```go
MaxHistory *f64
```

- *Type:* *f64

Limit the maximum number of revisions saved per release. Use 0 for no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#max_history Release#max_history}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-helm.release.ReleaseConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Namespace to install the release into.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#namespace Release#namespace}

---

##### `PassCredentials`<sup>Optional</sup> <a name="PassCredentials" id="@cdktf/provider-helm.release.ReleaseConfig.property.passCredentials"></a>

```go
PassCredentials interface{}
```

- *Type:* interface{}

Pass credentials to all domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#pass_credentials Release#pass_credentials}

---

##### `Postrender`<sup>Optional</sup> <a name="Postrender" id="@cdktf/provider-helm.release.ReleaseConfig.property.postrender"></a>

```go
Postrender ReleasePostrender
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleasePostrender">ReleasePostrender</a>

postrender block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#postrender Release#postrender}

---

##### `RecreatePods`<sup>Optional</sup> <a name="RecreatePods" id="@cdktf/provider-helm.release.ReleaseConfig.property.recreatePods"></a>

```go
RecreatePods interface{}
```

- *Type:* interface{}

Perform pods restart during upgrade/rollback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#recreate_pods Release#recreate_pods}

---

##### `RenderSubchartNotes`<sup>Optional</sup> <a name="RenderSubchartNotes" id="@cdktf/provider-helm.release.ReleaseConfig.property.renderSubchartNotes"></a>

```go
RenderSubchartNotes interface{}
```

- *Type:* interface{}

If set, render subchart notes along with the parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#render_subchart_notes Release#render_subchart_notes}

---

##### `Replace`<sup>Optional</sup> <a name="Replace" id="@cdktf/provider-helm.release.ReleaseConfig.property.replace"></a>

```go
Replace interface{}
```

- *Type:* interface{}

Re-use the given name, even if that name is already used. This is unsafe in production.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#replace Release#replace}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktf/provider-helm.release.ReleaseConfig.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

Repository where to locate the requested chart. If is a URL the chart is installed without installing the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#repository Release#repository}

---

##### `RepositoryCaFile`<sup>Optional</sup> <a name="RepositoryCaFile" id="@cdktf/provider-helm.release.ReleaseConfig.property.repositoryCaFile"></a>

```go
RepositoryCaFile *string
```

- *Type:* *string

The Repositories CA File.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#repository_ca_file Release#repository_ca_file}

---

##### `RepositoryCertFile`<sup>Optional</sup> <a name="RepositoryCertFile" id="@cdktf/provider-helm.release.ReleaseConfig.property.repositoryCertFile"></a>

```go
RepositoryCertFile *string
```

- *Type:* *string

The repositories cert file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#repository_cert_file Release#repository_cert_file}

---

##### `RepositoryKeyFile`<sup>Optional</sup> <a name="RepositoryKeyFile" id="@cdktf/provider-helm.release.ReleaseConfig.property.repositoryKeyFile"></a>

```go
RepositoryKeyFile *string
```

- *Type:* *string

The repositories cert key file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#repository_key_file Release#repository_key_file}

---

##### `RepositoryPassword`<sup>Optional</sup> <a name="RepositoryPassword" id="@cdktf/provider-helm.release.ReleaseConfig.property.repositoryPassword"></a>

```go
RepositoryPassword *string
```

- *Type:* *string

Password for HTTP basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#repository_password Release#repository_password}

---

##### `RepositoryUsername`<sup>Optional</sup> <a name="RepositoryUsername" id="@cdktf/provider-helm.release.ReleaseConfig.property.repositoryUsername"></a>

```go
RepositoryUsername *string
```

- *Type:* *string

Username for HTTP basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#repository_username Release#repository_username}

---

##### `ResetValues`<sup>Optional</sup> <a name="ResetValues" id="@cdktf/provider-helm.release.ReleaseConfig.property.resetValues"></a>

```go
ResetValues interface{}
```

- *Type:* interface{}

When upgrading, reset the values to the ones built into the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#reset_values Release#reset_values}

---

##### `ReuseValues`<sup>Optional</sup> <a name="ReuseValues" id="@cdktf/provider-helm.release.ReleaseConfig.property.reuseValues"></a>

```go
ReuseValues interface{}
```

- *Type:* interface{}

When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#reuse_values Release#reuse_values}

---

##### `Set`<sup>Optional</sup> <a name="Set" id="@cdktf/provider-helm.release.ReleaseConfig.property.set"></a>

```go
Set interface{}
```

- *Type:* interface{}

set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#set Release#set}

---

##### `SetList`<sup>Optional</sup> <a name="SetList" id="@cdktf/provider-helm.release.ReleaseConfig.property.setList"></a>

```go
SetList interface{}
```

- *Type:* interface{}

set_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#set_list Release#set_list}

---

##### `SetSensitive`<sup>Optional</sup> <a name="SetSensitive" id="@cdktf/provider-helm.release.ReleaseConfig.property.setSensitive"></a>

```go
SetSensitive interface{}
```

- *Type:* interface{}

set_sensitive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#set_sensitive Release#set_sensitive}

---

##### `SkipCrds`<sup>Optional</sup> <a name="SkipCrds" id="@cdktf/provider-helm.release.ReleaseConfig.property.skipCrds"></a>

```go
SkipCrds interface{}
```

- *Type:* interface{}

If set, no CRDs will be installed. By default, CRDs are installed if not already present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#skip_crds Release#skip_crds}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-helm.release.ReleaseConfig.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

Time in seconds to wait for any individual kubernetes operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#timeout Release#timeout}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-helm.release.ReleaseConfig.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

List of values in raw yaml format to pass to helm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#values Release#values}

---

##### `Verify`<sup>Optional</sup> <a name="Verify" id="@cdktf/provider-helm.release.ReleaseConfig.property.verify"></a>

```go
Verify interface{}
```

- *Type:* interface{}

Verify the package before installing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#verify Release#verify}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-helm.release.ReleaseConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Specify the exact chart version to install. If this is not specified, the latest version is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#version Release#version}

---

##### `Wait`<sup>Optional</sup> <a name="Wait" id="@cdktf/provider-helm.release.ReleaseConfig.property.wait"></a>

```go
Wait interface{}
```

- *Type:* interface{}

Will wait until all resources are in a ready state before marking the release as successful.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#wait Release#wait}

---

##### `WaitForJobs`<sup>Optional</sup> <a name="WaitForJobs" id="@cdktf/provider-helm.release.ReleaseConfig.property.waitForJobs"></a>

```go
WaitForJobs interface{}
```

- *Type:* interface{}

If wait is enabled, will wait until all Jobs have been completed before marking the release as successful.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#wait_for_jobs Release#wait_for_jobs}

---

### ReleaseMetadata <a name="ReleaseMetadata" id="@cdktf/provider-helm.release.ReleaseMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.release.ReleaseMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/release"

&release.ReleaseMetadata {

}
```


### ReleasePostrender <a name="ReleasePostrender" id="@cdktf/provider-helm.release.ReleasePostrender"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.release.ReleasePostrender.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/release"

&release.ReleasePostrender {
	BinaryPath: *string,
	Args: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrender.property.binaryPath">BinaryPath</a></code> | <code>*string</code> | The command binary path. |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrender.property.args">Args</a></code> | <code>*[]*string</code> | an argument to the post-renderer (can specify multiple). |

---

##### `BinaryPath`<sup>Required</sup> <a name="BinaryPath" id="@cdktf/provider-helm.release.ReleasePostrender.property.binaryPath"></a>

```go
BinaryPath *string
```

- *Type:* *string

The command binary path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#binary_path Release#binary_path}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-helm.release.ReleasePostrender.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

an argument to the post-renderer (can specify multiple).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#args Release#args}

---

### ReleaseSet <a name="ReleaseSet" id="@cdktf/provider-helm.release.ReleaseSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.release.ReleaseSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/release"

&release.ReleaseSet {
	Name: *string,
	Value: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSet.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#name Release#name}. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSet.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#value Release#value}. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSet.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#type Release#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-helm.release.ReleaseSet.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#name Release#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-helm.release.ReleaseSet.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#value Release#value}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-helm.release.ReleaseSet.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#type Release#type}.

---

### ReleaseSetListStruct <a name="ReleaseSetListStruct" id="@cdktf/provider-helm.release.ReleaseSetListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.release.ReleaseSetListStruct.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/release"

&release.ReleaseSetListStruct {
	Name: *string,
	Value: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStruct.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#name Release#name}. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStruct.property.value">Value</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#value Release#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-helm.release.ReleaseSetListStruct.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#name Release#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-helm.release.ReleaseSetListStruct.property.value"></a>

```go
Value *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#value Release#value}.

---

### ReleaseSetSensitive <a name="ReleaseSetSensitive" id="@cdktf/provider-helm.release.ReleaseSetSensitive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.release.ReleaseSetSensitive.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/release"

&release.ReleaseSetSensitive {
	Name: *string,
	Value: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitive.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#name Release#name}. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitive.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#value Release#value}. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitive.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#type Release#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-helm.release.ReleaseSetSensitive.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#name Release#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-helm.release.ReleaseSetSensitive.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#value Release#value}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-helm.release.ReleaseSetSensitive.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.0/docs/resources/release#type Release#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ReleaseMetadataList <a name="ReleaseMetadataList" id="@cdktf/provider-helm.release.ReleaseMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleaseMetadataList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/release"

release.NewReleaseMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ReleaseMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.release.ReleaseMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-helm.release.ReleaseMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-helm.release.ReleaseMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-helm.release.ReleaseMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-helm.release.ReleaseMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-helm.release.ReleaseMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleaseMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-helm.release.ReleaseMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-helm.release.ReleaseMetadataList.get"></a>

```go
func Get(index *f64) ReleaseMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-helm.release.ReleaseMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-helm.release.ReleaseMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-helm.release.ReleaseMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ReleaseMetadataOutputReference <a name="ReleaseMetadataOutputReference" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/release"

release.NewReleaseMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ReleaseMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.appVersion">AppVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.chart">Chart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.firstDeployed">FirstDeployed</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.lastDeployed">LastDeployed</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.notes">Notes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.revision">Revision</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.values">Values</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleaseMetadata">ReleaseMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppVersion`<sup>Required</sup> <a name="AppVersion" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.appVersion"></a>

```go
func AppVersion() *string
```

- *Type:* *string

---

##### `Chart`<sup>Required</sup> <a name="Chart" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.chart"></a>

```go
func Chart() *string
```

- *Type:* *string

---

##### `FirstDeployed`<sup>Required</sup> <a name="FirstDeployed" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.firstDeployed"></a>

```go
func FirstDeployed() *f64
```

- *Type:* *f64

---

##### `LastDeployed`<sup>Required</sup> <a name="LastDeployed" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.lastDeployed"></a>

```go
func LastDeployed() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.notes"></a>

```go
func Notes() *string
```

- *Type:* *string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.revision"></a>

```go
func Revision() *f64
```

- *Type:* *f64

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.values"></a>

```go
func Values() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() ReleaseMetadata
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleaseMetadata">ReleaseMetadata</a>

---


### ReleasePostrenderOutputReference <a name="ReleasePostrenderOutputReference" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/release"

release.NewReleasePostrenderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ReleasePostrenderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.resetArgs"></a>

```go
func ResetArgs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.argsInput">ArgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.binaryPathInput">BinaryPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.binaryPath">BinaryPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleasePostrender">ReleasePostrender</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.argsInput"></a>

```go
func ArgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `BinaryPathInput`<sup>Optional</sup> <a name="BinaryPathInput" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.binaryPathInput"></a>

```go
func BinaryPathInput() *string
```

- *Type:* *string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `BinaryPath`<sup>Required</sup> <a name="BinaryPath" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.binaryPath"></a>

```go
func BinaryPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.internalValue"></a>

```go
func InternalValue() ReleasePostrender
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleasePostrender">ReleasePostrender</a>

---


### ReleaseSetList <a name="ReleaseSetList" id="@cdktf/provider-helm.release.ReleaseSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleaseSetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/release"

release.NewReleaseSetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ReleaseSetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.release.ReleaseSetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-helm.release.ReleaseSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-helm.release.ReleaseSetList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-helm.release.ReleaseSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-helm.release.ReleaseSetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-helm.release.ReleaseSetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleaseSetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-helm.release.ReleaseSetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-helm.release.ReleaseSetList.get"></a>

```go
func Get(index *f64) ReleaseSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-helm.release.ReleaseSetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-helm.release.ReleaseSetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-helm.release.ReleaseSetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-helm.release.ReleaseSetList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ReleaseSetListStructList <a name="ReleaseSetListStructList" id="@cdktf/provider-helm.release.ReleaseSetListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleaseSetListStructList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/release"

release.NewReleaseSetListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ReleaseSetListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.release.ReleaseSetListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-helm.release.ReleaseSetListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-helm.release.ReleaseSetListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-helm.release.ReleaseSetListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-helm.release.ReleaseSetListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-helm.release.ReleaseSetListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleaseSetListStructList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-helm.release.ReleaseSetListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-helm.release.ReleaseSetListStructList.get"></a>

```go
func Get(index *f64) ReleaseSetListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-helm.release.ReleaseSetListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-helm.release.ReleaseSetListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-helm.release.ReleaseSetListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-helm.release.ReleaseSetListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ReleaseSetListStructOutputReference <a name="ReleaseSetListStructOutputReference" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/release"

release.NewReleaseSetListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ReleaseSetListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.valueInput">ValueInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.value">Value</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.valueInput"></a>

```go
func ValueInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.value"></a>

```go
func Value() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ReleaseSetOutputReference <a name="ReleaseSetOutputReference" id="@cdktf/provider-helm.release.ReleaseSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/release"

release.NewReleaseSetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ReleaseSetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ReleaseSetSensitiveList <a name="ReleaseSetSensitiveList" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/release"

release.NewReleaseSetSensitiveList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ReleaseSetSensitiveList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.get"></a>

```go
func Get(index *f64) ReleaseSetSensitiveOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ReleaseSetSensitiveOutputReference <a name="ReleaseSetSensitiveOutputReference" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/release"

release.NewReleaseSetSensitiveOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ReleaseSetSensitiveOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



