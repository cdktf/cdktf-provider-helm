# `helm_release`

Refer to the Terraform Registory for docs: [`helm_release`](https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release).

# `release` Submodule <a name="`release` Submodule" id="@cdktf/provider-helm.release"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Release <a name="Release" id="@cdktf/provider-helm.release.Release"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release helm_release}.

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.Release.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.helm.release.Release;

Release.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .chart(java.lang.String)
    .name(java.lang.String)
//  .atomic(java.lang.Boolean)
//  .atomic(IResolvable)
//  .cleanupOnFail(java.lang.Boolean)
//  .cleanupOnFail(IResolvable)
//  .createNamespace(java.lang.Boolean)
//  .createNamespace(IResolvable)
//  .dependencyUpdate(java.lang.Boolean)
//  .dependencyUpdate(IResolvable)
//  .description(java.lang.String)
//  .devel(java.lang.Boolean)
//  .devel(IResolvable)
//  .disableCrdHooks(java.lang.Boolean)
//  .disableCrdHooks(IResolvable)
//  .disableOpenapiValidation(java.lang.Boolean)
//  .disableOpenapiValidation(IResolvable)
//  .disableWebhooks(java.lang.Boolean)
//  .disableWebhooks(IResolvable)
//  .forceUpdate(java.lang.Boolean)
//  .forceUpdate(IResolvable)
//  .id(java.lang.String)
//  .keyring(java.lang.String)
//  .lint(java.lang.Boolean)
//  .lint(IResolvable)
//  .maxHistory(java.lang.Number)
//  .namespace(java.lang.String)
//  .passCredentials(java.lang.Boolean)
//  .passCredentials(IResolvable)
//  .postrender(ReleasePostrender)
//  .recreatePods(java.lang.Boolean)
//  .recreatePods(IResolvable)
//  .renderSubchartNotes(java.lang.Boolean)
//  .renderSubchartNotes(IResolvable)
//  .replace(java.lang.Boolean)
//  .replace(IResolvable)
//  .repository(java.lang.String)
//  .repositoryCaFile(java.lang.String)
//  .repositoryCertFile(java.lang.String)
//  .repositoryKeyFile(java.lang.String)
//  .repositoryPassword(java.lang.String)
//  .repositoryUsername(java.lang.String)
//  .resetValues(java.lang.Boolean)
//  .resetValues(IResolvable)
//  .reuseValues(java.lang.Boolean)
//  .reuseValues(IResolvable)
//  .set(IResolvable)
//  .set(java.util.List<ReleaseSet>)
//  .setList(IResolvable)
//  .setList(java.util.List<ReleaseSetListStruct>)
//  .setSensitive(IResolvable)
//  .setSensitive(java.util.List<ReleaseSetSensitive>)
//  .skipCrds(java.lang.Boolean)
//  .skipCrds(IResolvable)
//  .timeout(java.lang.Number)
//  .values(java.util.List<java.lang.String>)
//  .verify(java.lang.Boolean)
//  .verify(IResolvable)
//  .version(java.lang.String)
//  .wait(java.lang.Boolean)
//  .wait(IResolvable)
//  .waitForJobs(java.lang.Boolean)
//  .waitForJobs(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.chart">chart</a></code> | <code>java.lang.String</code> | Chart name to be installed. A path may be used. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Release name. The length must not be longer than 53 characters. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.atomic">atomic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, installation process purges chart on fail. The wait flag will be set automatically if atomic is used. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.cleanupOnFail">cleanupOnFail</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow deletion of new resources created in this upgrade when upgrade fails. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.createNamespace">createNamespace</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Create the namespace if it does not exist. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.dependencyUpdate">dependencyUpdate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Run helm dependency update before installing the chart. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Add a custom description. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.devel">devel</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.disableCrdHooks">disableCrdHooks</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Prevent CRD hooks from, running, but run other hooks.  See helm install --no-crd-hook. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.disableOpenapiValidation">disableOpenapiValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.disableWebhooks">disableWebhooks</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Prevent hooks from running. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.forceUpdate">forceUpdate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Force resource update through delete/recreate if needed. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#id Release#id}. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.keyring">keyring</a></code> | <code>java.lang.String</code> | Location of public keys used for verification. Used only if `verify` is true. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.lint">lint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Run helm lint when planning. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.maxHistory">maxHistory</a></code> | <code>java.lang.Number</code> | Limit the maximum number of revisions saved per release. Use 0 for no limit. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace to install the release into. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.passCredentials">passCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Pass credentials to all domains. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.postrender">postrender</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleasePostrender">ReleasePostrender</a></code> | postrender block. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.recreatePods">recreatePods</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Perform pods restart during upgrade/rollback. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.renderSubchartNotes">renderSubchartNotes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, render subchart notes along with the parent. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.replace">replace</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Re-use the given name, even if that name is already used. This is unsafe in production. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.repository">repository</a></code> | <code>java.lang.String</code> | Repository where to locate the requested chart. If is a URL the chart is installed without installing the repository. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.repositoryCaFile">repositoryCaFile</a></code> | <code>java.lang.String</code> | The Repositories CA File. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.repositoryCertFile">repositoryCertFile</a></code> | <code>java.lang.String</code> | The repositories cert file. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.repositoryKeyFile">repositoryKeyFile</a></code> | <code>java.lang.String</code> | The repositories cert key file. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.repositoryPassword">repositoryPassword</a></code> | <code>java.lang.String</code> | Password for HTTP basic authentication. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.repositoryUsername">repositoryUsername</a></code> | <code>java.lang.String</code> | Username for HTTP basic authentication. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.resetValues">resetValues</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When upgrading, reset the values to the ones built into the chart. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.reuseValues">reuseValues</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.set">set</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.release.ReleaseSet">ReleaseSet</a>></code> | set block. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.setList">setList</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>></code> | set_list block. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.setSensitive">setSensitive</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>></code> | set_sensitive block. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.skipCrds">skipCrds</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, no CRDs will be installed. By default, CRDs are installed if not already present. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.timeout">timeout</a></code> | <code>java.lang.Number</code> | Time in seconds to wait for any individual kubernetes operation. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.values">values</a></code> | <code>java.util.List<java.lang.String></code> | List of values in raw yaml format to pass to helm. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.verify">verify</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Verify the package before installing it. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | Specify the exact chart version to install. If this is not specified, the latest version is installed. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.wait">wait</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Will wait until all resources are in a ready state before marking the release as successful. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.waitForJobs">waitForJobs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If wait is enabled, will wait until all Jobs have been completed before marking the release as successful. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-helm.release.Release.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-helm.release.Release.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-helm.release.Release.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-helm.release.Release.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-helm.release.Release.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-helm.release.Release.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-helm.release.Release.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-helm.release.Release.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-helm.release.Release.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `chart`<sup>Required</sup> <a name="chart" id="@cdktf/provider-helm.release.Release.Initializer.parameter.chart"></a>

- *Type:* java.lang.String

Chart name to be installed. A path may be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#chart Release#chart}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.release.Release.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Release name. The length must not be longer than 53 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#name Release#name}

---

##### `atomic`<sup>Optional</sup> <a name="atomic" id="@cdktf/provider-helm.release.Release.Initializer.parameter.atomic"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, installation process purges chart on fail. The wait flag will be set automatically if atomic is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#atomic Release#atomic}

---

##### `cleanupOnFail`<sup>Optional</sup> <a name="cleanupOnFail" id="@cdktf/provider-helm.release.Release.Initializer.parameter.cleanupOnFail"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow deletion of new resources created in this upgrade when upgrade fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#cleanup_on_fail Release#cleanup_on_fail}

---

##### `createNamespace`<sup>Optional</sup> <a name="createNamespace" id="@cdktf/provider-helm.release.Release.Initializer.parameter.createNamespace"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Create the namespace if it does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#create_namespace Release#create_namespace}

---

##### `dependencyUpdate`<sup>Optional</sup> <a name="dependencyUpdate" id="@cdktf/provider-helm.release.Release.Initializer.parameter.dependencyUpdate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Run helm dependency update before installing the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#dependency_update Release#dependency_update}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-helm.release.Release.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Add a custom description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#description Release#description}

---

##### `devel`<sup>Optional</sup> <a name="devel" id="@cdktf/provider-helm.release.Release.Initializer.parameter.devel"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#devel Release#devel}

---

##### `disableCrdHooks`<sup>Optional</sup> <a name="disableCrdHooks" id="@cdktf/provider-helm.release.Release.Initializer.parameter.disableCrdHooks"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Prevent CRD hooks from, running, but run other hooks.  See helm install --no-crd-hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#disable_crd_hooks Release#disable_crd_hooks}

---

##### `disableOpenapiValidation`<sup>Optional</sup> <a name="disableOpenapiValidation" id="@cdktf/provider-helm.release.Release.Initializer.parameter.disableOpenapiValidation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#disable_openapi_validation Release#disable_openapi_validation}

---

##### `disableWebhooks`<sup>Optional</sup> <a name="disableWebhooks" id="@cdktf/provider-helm.release.Release.Initializer.parameter.disableWebhooks"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Prevent hooks from running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#disable_webhooks Release#disable_webhooks}

---

##### `forceUpdate`<sup>Optional</sup> <a name="forceUpdate" id="@cdktf/provider-helm.release.Release.Initializer.parameter.forceUpdate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Force resource update through delete/recreate if needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#force_update Release#force_update}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-helm.release.Release.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#id Release#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyring`<sup>Optional</sup> <a name="keyring" id="@cdktf/provider-helm.release.Release.Initializer.parameter.keyring"></a>

- *Type:* java.lang.String

Location of public keys used for verification. Used only if `verify` is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#keyring Release#keyring}

---

##### `lint`<sup>Optional</sup> <a name="lint" id="@cdktf/provider-helm.release.Release.Initializer.parameter.lint"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Run helm lint when planning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#lint Release#lint}

---

##### `maxHistory`<sup>Optional</sup> <a name="maxHistory" id="@cdktf/provider-helm.release.Release.Initializer.parameter.maxHistory"></a>

- *Type:* java.lang.Number

Limit the maximum number of revisions saved per release. Use 0 for no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#max_history Release#max_history}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-helm.release.Release.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Namespace to install the release into.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#namespace Release#namespace}

---

##### `passCredentials`<sup>Optional</sup> <a name="passCredentials" id="@cdktf/provider-helm.release.Release.Initializer.parameter.passCredentials"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Pass credentials to all domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#pass_credentials Release#pass_credentials}

---

##### `postrender`<sup>Optional</sup> <a name="postrender" id="@cdktf/provider-helm.release.Release.Initializer.parameter.postrender"></a>

- *Type:* <a href="#@cdktf/provider-helm.release.ReleasePostrender">ReleasePostrender</a>

postrender block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#postrender Release#postrender}

---

##### `recreatePods`<sup>Optional</sup> <a name="recreatePods" id="@cdktf/provider-helm.release.Release.Initializer.parameter.recreatePods"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Perform pods restart during upgrade/rollback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#recreate_pods Release#recreate_pods}

---

##### `renderSubchartNotes`<sup>Optional</sup> <a name="renderSubchartNotes" id="@cdktf/provider-helm.release.Release.Initializer.parameter.renderSubchartNotes"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, render subchart notes along with the parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#render_subchart_notes Release#render_subchart_notes}

---

##### `replace`<sup>Optional</sup> <a name="replace" id="@cdktf/provider-helm.release.Release.Initializer.parameter.replace"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Re-use the given name, even if that name is already used. This is unsafe in production.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#replace Release#replace}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktf/provider-helm.release.Release.Initializer.parameter.repository"></a>

- *Type:* java.lang.String

Repository where to locate the requested chart. If is a URL the chart is installed without installing the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#repository Release#repository}

---

##### `repositoryCaFile`<sup>Optional</sup> <a name="repositoryCaFile" id="@cdktf/provider-helm.release.Release.Initializer.parameter.repositoryCaFile"></a>

- *Type:* java.lang.String

The Repositories CA File.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#repository_ca_file Release#repository_ca_file}

---

##### `repositoryCertFile`<sup>Optional</sup> <a name="repositoryCertFile" id="@cdktf/provider-helm.release.Release.Initializer.parameter.repositoryCertFile"></a>

- *Type:* java.lang.String

The repositories cert file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#repository_cert_file Release#repository_cert_file}

---

##### `repositoryKeyFile`<sup>Optional</sup> <a name="repositoryKeyFile" id="@cdktf/provider-helm.release.Release.Initializer.parameter.repositoryKeyFile"></a>

- *Type:* java.lang.String

The repositories cert key file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#repository_key_file Release#repository_key_file}

---

##### `repositoryPassword`<sup>Optional</sup> <a name="repositoryPassword" id="@cdktf/provider-helm.release.Release.Initializer.parameter.repositoryPassword"></a>

- *Type:* java.lang.String

Password for HTTP basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#repository_password Release#repository_password}

---

##### `repositoryUsername`<sup>Optional</sup> <a name="repositoryUsername" id="@cdktf/provider-helm.release.Release.Initializer.parameter.repositoryUsername"></a>

- *Type:* java.lang.String

Username for HTTP basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#repository_username Release#repository_username}

---

##### `resetValues`<sup>Optional</sup> <a name="resetValues" id="@cdktf/provider-helm.release.Release.Initializer.parameter.resetValues"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When upgrading, reset the values to the ones built into the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#reset_values Release#reset_values}

---

##### `reuseValues`<sup>Optional</sup> <a name="reuseValues" id="@cdktf/provider-helm.release.Release.Initializer.parameter.reuseValues"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#reuse_values Release#reuse_values}

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-helm.release.Release.Initializer.parameter.set"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.release.ReleaseSet">ReleaseSet</a>>

set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#set Release#set}

---

##### `setList`<sup>Optional</sup> <a name="setList" id="@cdktf/provider-helm.release.Release.Initializer.parameter.setList"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>>

set_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#set_list Release#set_list}

---

##### `setSensitive`<sup>Optional</sup> <a name="setSensitive" id="@cdktf/provider-helm.release.Release.Initializer.parameter.setSensitive"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>>

set_sensitive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#set_sensitive Release#set_sensitive}

---

##### `skipCrds`<sup>Optional</sup> <a name="skipCrds" id="@cdktf/provider-helm.release.Release.Initializer.parameter.skipCrds"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, no CRDs will be installed. By default, CRDs are installed if not already present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#skip_crds Release#skip_crds}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-helm.release.Release.Initializer.parameter.timeout"></a>

- *Type:* java.lang.Number

Time in seconds to wait for any individual kubernetes operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#timeout Release#timeout}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-helm.release.Release.Initializer.parameter.values"></a>

- *Type:* java.util.List<java.lang.String>

List of values in raw yaml format to pass to helm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#values Release#values}

---

##### `verify`<sup>Optional</sup> <a name="verify" id="@cdktf/provider-helm.release.Release.Initializer.parameter.verify"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Verify the package before installing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#verify Release#verify}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-helm.release.Release.Initializer.parameter.version"></a>

- *Type:* java.lang.String

Specify the exact chart version to install. If this is not specified, the latest version is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#version Release#version}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktf/provider-helm.release.Release.Initializer.parameter.wait"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Will wait until all resources are in a ready state before marking the release as successful.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#wait Release#wait}

---

##### `waitForJobs`<sup>Optional</sup> <a name="waitForJobs" id="@cdktf/provider-helm.release.Release.Initializer.parameter.waitForJobs"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If wait is enabled, will wait until all Jobs have been completed before marking the release as successful.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#wait_for_jobs Release#wait_for_jobs}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.Release.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-helm.release.Release.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-helm.release.Release.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-helm.release.Release.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-helm.release.Release.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.putPostrender">putPostrender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.putSet">putSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.putSetList">putSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.putSetSensitive">putSetSensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetAtomic">resetAtomic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetCleanupOnFail">resetCleanupOnFail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetCreateNamespace">resetCreateNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetDependencyUpdate">resetDependencyUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetDevel">resetDevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetDisableCrdHooks">resetDisableCrdHooks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetDisableOpenapiValidation">resetDisableOpenapiValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetDisableWebhooks">resetDisableWebhooks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetForceUpdate">resetForceUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetKeyring">resetKeyring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetLint">resetLint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetMaxHistory">resetMaxHistory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetPassCredentials">resetPassCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetPostrender">resetPostrender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetRecreatePods">resetRecreatePods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetRenderSubchartNotes">resetRenderSubchartNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetReplace">resetReplace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetRepository">resetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetRepositoryCaFile">resetRepositoryCaFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetRepositoryCertFile">resetRepositoryCertFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetRepositoryKeyFile">resetRepositoryKeyFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetRepositoryPassword">resetRepositoryPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetRepositoryUsername">resetRepositoryUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetResetValues">resetResetValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetReuseValues">resetReuseValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetSet">resetSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetSetList">resetSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetSetSensitive">resetSetSensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetSkipCrds">resetSkipCrds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetTfValues">resetTfValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetVerify">resetVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetVersion">resetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetWait">resetWait</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetWaitForJobs">resetWaitForJobs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-helm.release.Release.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-helm.release.Release.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-helm.release.Release.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.Release.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-helm.release.Release.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-helm.release.Release.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-helm.release.Release.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-helm.release.Release.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-helm.release.Release.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-helm.release.Release.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.Release.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-helm.release.Release.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.Release.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-helm.release.Release.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.Release.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-helm.release.Release.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.Release.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-helm.release.Release.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.Release.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-helm.release.Release.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.Release.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-helm.release.Release.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.Release.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-helm.release.Release.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.Release.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-helm.release.Release.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.Release.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-helm.release.Release.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.Release.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putPostrender` <a name="putPostrender" id="@cdktf/provider-helm.release.Release.putPostrender"></a>

```java
public void putPostrender(ReleasePostrender value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.Release.putPostrender.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-helm.release.ReleasePostrender">ReleasePostrender</a>

---

##### `putSet` <a name="putSet" id="@cdktf/provider-helm.release.Release.putSet"></a>

```java
public void putSet(IResolvable OR java.util.List<ReleaseSet> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.Release.putSet.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.release.ReleaseSet">ReleaseSet</a>>

---

##### `putSetList` <a name="putSetList" id="@cdktf/provider-helm.release.Release.putSetList"></a>

```java
public void putSetList(IResolvable OR java.util.List<ReleaseSetListStruct> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.Release.putSetList.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>>

---

##### `putSetSensitive` <a name="putSetSensitive" id="@cdktf/provider-helm.release.Release.putSetSensitive"></a>

```java
public void putSetSensitive(IResolvable OR java.util.List<ReleaseSetSensitive> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.Release.putSetSensitive.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>>

---

##### `resetAtomic` <a name="resetAtomic" id="@cdktf/provider-helm.release.Release.resetAtomic"></a>

```java
public void resetAtomic()
```

##### `resetCleanupOnFail` <a name="resetCleanupOnFail" id="@cdktf/provider-helm.release.Release.resetCleanupOnFail"></a>

```java
public void resetCleanupOnFail()
```

##### `resetCreateNamespace` <a name="resetCreateNamespace" id="@cdktf/provider-helm.release.Release.resetCreateNamespace"></a>

```java
public void resetCreateNamespace()
```

##### `resetDependencyUpdate` <a name="resetDependencyUpdate" id="@cdktf/provider-helm.release.Release.resetDependencyUpdate"></a>

```java
public void resetDependencyUpdate()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-helm.release.Release.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDevel` <a name="resetDevel" id="@cdktf/provider-helm.release.Release.resetDevel"></a>

```java
public void resetDevel()
```

##### `resetDisableCrdHooks` <a name="resetDisableCrdHooks" id="@cdktf/provider-helm.release.Release.resetDisableCrdHooks"></a>

```java
public void resetDisableCrdHooks()
```

##### `resetDisableOpenapiValidation` <a name="resetDisableOpenapiValidation" id="@cdktf/provider-helm.release.Release.resetDisableOpenapiValidation"></a>

```java
public void resetDisableOpenapiValidation()
```

##### `resetDisableWebhooks` <a name="resetDisableWebhooks" id="@cdktf/provider-helm.release.Release.resetDisableWebhooks"></a>

```java
public void resetDisableWebhooks()
```

##### `resetForceUpdate` <a name="resetForceUpdate" id="@cdktf/provider-helm.release.Release.resetForceUpdate"></a>

```java
public void resetForceUpdate()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-helm.release.Release.resetId"></a>

```java
public void resetId()
```

##### `resetKeyring` <a name="resetKeyring" id="@cdktf/provider-helm.release.Release.resetKeyring"></a>

```java
public void resetKeyring()
```

##### `resetLint` <a name="resetLint" id="@cdktf/provider-helm.release.Release.resetLint"></a>

```java
public void resetLint()
```

##### `resetMaxHistory` <a name="resetMaxHistory" id="@cdktf/provider-helm.release.Release.resetMaxHistory"></a>

```java
public void resetMaxHistory()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-helm.release.Release.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPassCredentials` <a name="resetPassCredentials" id="@cdktf/provider-helm.release.Release.resetPassCredentials"></a>

```java
public void resetPassCredentials()
```

##### `resetPostrender` <a name="resetPostrender" id="@cdktf/provider-helm.release.Release.resetPostrender"></a>

```java
public void resetPostrender()
```

##### `resetRecreatePods` <a name="resetRecreatePods" id="@cdktf/provider-helm.release.Release.resetRecreatePods"></a>

```java
public void resetRecreatePods()
```

##### `resetRenderSubchartNotes` <a name="resetRenderSubchartNotes" id="@cdktf/provider-helm.release.Release.resetRenderSubchartNotes"></a>

```java
public void resetRenderSubchartNotes()
```

##### `resetReplace` <a name="resetReplace" id="@cdktf/provider-helm.release.Release.resetReplace"></a>

```java
public void resetReplace()
```

##### `resetRepository` <a name="resetRepository" id="@cdktf/provider-helm.release.Release.resetRepository"></a>

```java
public void resetRepository()
```

##### `resetRepositoryCaFile` <a name="resetRepositoryCaFile" id="@cdktf/provider-helm.release.Release.resetRepositoryCaFile"></a>

```java
public void resetRepositoryCaFile()
```

##### `resetRepositoryCertFile` <a name="resetRepositoryCertFile" id="@cdktf/provider-helm.release.Release.resetRepositoryCertFile"></a>

```java
public void resetRepositoryCertFile()
```

##### `resetRepositoryKeyFile` <a name="resetRepositoryKeyFile" id="@cdktf/provider-helm.release.Release.resetRepositoryKeyFile"></a>

```java
public void resetRepositoryKeyFile()
```

##### `resetRepositoryPassword` <a name="resetRepositoryPassword" id="@cdktf/provider-helm.release.Release.resetRepositoryPassword"></a>

```java
public void resetRepositoryPassword()
```

##### `resetRepositoryUsername` <a name="resetRepositoryUsername" id="@cdktf/provider-helm.release.Release.resetRepositoryUsername"></a>

```java
public void resetRepositoryUsername()
```

##### `resetResetValues` <a name="resetResetValues" id="@cdktf/provider-helm.release.Release.resetResetValues"></a>

```java
public void resetResetValues()
```

##### `resetReuseValues` <a name="resetReuseValues" id="@cdktf/provider-helm.release.Release.resetReuseValues"></a>

```java
public void resetReuseValues()
```

##### `resetSet` <a name="resetSet" id="@cdktf/provider-helm.release.Release.resetSet"></a>

```java
public void resetSet()
```

##### `resetSetList` <a name="resetSetList" id="@cdktf/provider-helm.release.Release.resetSetList"></a>

```java
public void resetSetList()
```

##### `resetSetSensitive` <a name="resetSetSensitive" id="@cdktf/provider-helm.release.Release.resetSetSensitive"></a>

```java
public void resetSetSensitive()
```

##### `resetSkipCrds` <a name="resetSkipCrds" id="@cdktf/provider-helm.release.Release.resetSkipCrds"></a>

```java
public void resetSkipCrds()
```

##### `resetTfValues` <a name="resetTfValues" id="@cdktf/provider-helm.release.Release.resetTfValues"></a>

```java
public void resetTfValues()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-helm.release.Release.resetTimeout"></a>

```java
public void resetTimeout()
```

##### `resetVerify` <a name="resetVerify" id="@cdktf/provider-helm.release.Release.resetVerify"></a>

```java
public void resetVerify()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-helm.release.Release.resetVersion"></a>

```java
public void resetVersion()
```

##### `resetWait` <a name="resetWait" id="@cdktf/provider-helm.release.Release.resetWait"></a>

```java
public void resetWait()
```

##### `resetWaitForJobs` <a name="resetWaitForJobs" id="@cdktf/provider-helm.release.Release.resetWaitForJobs"></a>

```java
public void resetWaitForJobs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.Release.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-helm.release.Release.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-helm.release.Release.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.helm.release.Release;

Release.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-helm.release.Release.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.helm.release.Release;

Release.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-helm.release.Release.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-helm.release.Release.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.helm.release.Release;

Release.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-helm.release.Release.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.Release.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-helm.release.Release.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.manifest">manifest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataList">ReleaseMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.postrender">postrender</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference">ReleasePostrenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.set">set</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleaseSetList">ReleaseSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.setList">setList</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList">ReleaseSetListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.setSensitive">setSensitive</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList">ReleaseSetSensitiveList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.atomicInput">atomicInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.chartInput">chartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.cleanupOnFailInput">cleanupOnFailInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.createNamespaceInput">createNamespaceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.dependencyUpdateInput">dependencyUpdateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.develInput">develInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.disableCrdHooksInput">disableCrdHooksInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.disableOpenapiValidationInput">disableOpenapiValidationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.disableWebhooksInput">disableWebhooksInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.forceUpdateInput">forceUpdateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.keyringInput">keyringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.lintInput">lintInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.maxHistoryInput">maxHistoryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.passCredentialsInput">passCredentialsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.postrenderInput">postrenderInput</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleasePostrender">ReleasePostrender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.recreatePodsInput">recreatePodsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.renderSubchartNotesInput">renderSubchartNotesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.replaceInput">replaceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryCaFileInput">repositoryCaFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryCertFileInput">repositoryCertFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryKeyFileInput">repositoryKeyFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryPasswordInput">repositoryPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryUsernameInput">repositoryUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.resetValuesInput">resetValuesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.reuseValuesInput">reuseValuesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.setInput">setInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.release.ReleaseSet">ReleaseSet</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.setListInput">setListInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.setSensitiveInput">setSensitiveInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.skipCrdsInput">skipCrdsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.verifyInput">verifyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.waitForJobsInput">waitForJobsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.waitInput">waitInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.atomic">atomic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.chart">chart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.cleanupOnFail">cleanupOnFail</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.createNamespace">createNamespace</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.dependencyUpdate">dependencyUpdate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.devel">devel</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.disableCrdHooks">disableCrdHooks</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.disableOpenapiValidation">disableOpenapiValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.disableWebhooks">disableWebhooks</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.forceUpdate">forceUpdate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.keyring">keyring</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.lint">lint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.maxHistory">maxHistory</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.passCredentials">passCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.recreatePods">recreatePods</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.renderSubchartNotes">renderSubchartNotes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.replace">replace</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryCaFile">repositoryCaFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryCertFile">repositoryCertFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryKeyFile">repositoryKeyFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryPassword">repositoryPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryUsername">repositoryUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.resetValues">resetValues</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.reuseValues">reuseValues</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.skipCrds">skipCrds</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.verify">verify</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.wait">wait</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.waitForJobs">waitForJobs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-helm.release.Release.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-helm.release.Release.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.release.Release.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-helm.release.Release.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-helm.release.Release.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-helm.release.Release.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-helm.release.Release.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-helm.release.Release.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-helm.release.Release.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-helm.release.Release.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-helm.release.Release.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-helm.release.Release.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-helm.release.Release.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-helm.release.Release.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-helm.release.Release.property.manifest"></a>

```java
public java.lang.String getManifest();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-helm.release.Release.property.metadata"></a>

```java
public ReleaseMetadataList getMetadata();
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleaseMetadataList">ReleaseMetadataList</a>

---

##### `postrender`<sup>Required</sup> <a name="postrender" id="@cdktf/provider-helm.release.Release.property.postrender"></a>

```java
public ReleasePostrenderOutputReference getPostrender();
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference">ReleasePostrenderOutputReference</a>

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-helm.release.Release.property.set"></a>

```java
public ReleaseSetList getSet();
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleaseSetList">ReleaseSetList</a>

---

##### `setList`<sup>Required</sup> <a name="setList" id="@cdktf/provider-helm.release.Release.property.setList"></a>

```java
public ReleaseSetListStructList getSetList();
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleaseSetListStructList">ReleaseSetListStructList</a>

---

##### `setSensitive`<sup>Required</sup> <a name="setSensitive" id="@cdktf/provider-helm.release.Release.property.setSensitive"></a>

```java
public ReleaseSetSensitiveList getSetSensitive();
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList">ReleaseSetSensitiveList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-helm.release.Release.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `atomicInput`<sup>Optional</sup> <a name="atomicInput" id="@cdktf/provider-helm.release.Release.property.atomicInput"></a>

```java
public java.lang.Object getAtomicInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `chartInput`<sup>Optional</sup> <a name="chartInput" id="@cdktf/provider-helm.release.Release.property.chartInput"></a>

```java
public java.lang.String getChartInput();
```

- *Type:* java.lang.String

---

##### `cleanupOnFailInput`<sup>Optional</sup> <a name="cleanupOnFailInput" id="@cdktf/provider-helm.release.Release.property.cleanupOnFailInput"></a>

```java
public java.lang.Object getCleanupOnFailInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `createNamespaceInput`<sup>Optional</sup> <a name="createNamespaceInput" id="@cdktf/provider-helm.release.Release.property.createNamespaceInput"></a>

```java
public java.lang.Object getCreateNamespaceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dependencyUpdateInput`<sup>Optional</sup> <a name="dependencyUpdateInput" id="@cdktf/provider-helm.release.Release.property.dependencyUpdateInput"></a>

```java
public java.lang.Object getDependencyUpdateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-helm.release.Release.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `develInput`<sup>Optional</sup> <a name="develInput" id="@cdktf/provider-helm.release.Release.property.develInput"></a>

```java
public java.lang.Object getDevelInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableCrdHooksInput`<sup>Optional</sup> <a name="disableCrdHooksInput" id="@cdktf/provider-helm.release.Release.property.disableCrdHooksInput"></a>

```java
public java.lang.Object getDisableCrdHooksInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableOpenapiValidationInput`<sup>Optional</sup> <a name="disableOpenapiValidationInput" id="@cdktf/provider-helm.release.Release.property.disableOpenapiValidationInput"></a>

```java
public java.lang.Object getDisableOpenapiValidationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableWebhooksInput`<sup>Optional</sup> <a name="disableWebhooksInput" id="@cdktf/provider-helm.release.Release.property.disableWebhooksInput"></a>

```java
public java.lang.Object getDisableWebhooksInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forceUpdateInput`<sup>Optional</sup> <a name="forceUpdateInput" id="@cdktf/provider-helm.release.Release.property.forceUpdateInput"></a>

```java
public java.lang.Object getForceUpdateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-helm.release.Release.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyringInput`<sup>Optional</sup> <a name="keyringInput" id="@cdktf/provider-helm.release.Release.property.keyringInput"></a>

```java
public java.lang.String getKeyringInput();
```

- *Type:* java.lang.String

---

##### `lintInput`<sup>Optional</sup> <a name="lintInput" id="@cdktf/provider-helm.release.Release.property.lintInput"></a>

```java
public java.lang.Object getLintInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxHistoryInput`<sup>Optional</sup> <a name="maxHistoryInput" id="@cdktf/provider-helm.release.Release.property.maxHistoryInput"></a>

```java
public java.lang.Number getMaxHistoryInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-helm.release.Release.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-helm.release.Release.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `passCredentialsInput`<sup>Optional</sup> <a name="passCredentialsInput" id="@cdktf/provider-helm.release.Release.property.passCredentialsInput"></a>

```java
public java.lang.Object getPassCredentialsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `postrenderInput`<sup>Optional</sup> <a name="postrenderInput" id="@cdktf/provider-helm.release.Release.property.postrenderInput"></a>

```java
public ReleasePostrender getPostrenderInput();
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleasePostrender">ReleasePostrender</a>

---

##### `recreatePodsInput`<sup>Optional</sup> <a name="recreatePodsInput" id="@cdktf/provider-helm.release.Release.property.recreatePodsInput"></a>

```java
public java.lang.Object getRecreatePodsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `renderSubchartNotesInput`<sup>Optional</sup> <a name="renderSubchartNotesInput" id="@cdktf/provider-helm.release.Release.property.renderSubchartNotesInput"></a>

```java
public java.lang.Object getRenderSubchartNotesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `replaceInput`<sup>Optional</sup> <a name="replaceInput" id="@cdktf/provider-helm.release.Release.property.replaceInput"></a>

```java
public java.lang.Object getReplaceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `repositoryCaFileInput`<sup>Optional</sup> <a name="repositoryCaFileInput" id="@cdktf/provider-helm.release.Release.property.repositoryCaFileInput"></a>

```java
public java.lang.String getRepositoryCaFileInput();
```

- *Type:* java.lang.String

---

##### `repositoryCertFileInput`<sup>Optional</sup> <a name="repositoryCertFileInput" id="@cdktf/provider-helm.release.Release.property.repositoryCertFileInput"></a>

```java
public java.lang.String getRepositoryCertFileInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-helm.release.Release.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `repositoryKeyFileInput`<sup>Optional</sup> <a name="repositoryKeyFileInput" id="@cdktf/provider-helm.release.Release.property.repositoryKeyFileInput"></a>

```java
public java.lang.String getRepositoryKeyFileInput();
```

- *Type:* java.lang.String

---

##### `repositoryPasswordInput`<sup>Optional</sup> <a name="repositoryPasswordInput" id="@cdktf/provider-helm.release.Release.property.repositoryPasswordInput"></a>

```java
public java.lang.String getRepositoryPasswordInput();
```

- *Type:* java.lang.String

---

##### `repositoryUsernameInput`<sup>Optional</sup> <a name="repositoryUsernameInput" id="@cdktf/provider-helm.release.Release.property.repositoryUsernameInput"></a>

```java
public java.lang.String getRepositoryUsernameInput();
```

- *Type:* java.lang.String

---

##### `resetValuesInput`<sup>Optional</sup> <a name="resetValuesInput" id="@cdktf/provider-helm.release.Release.property.resetValuesInput"></a>

```java
public java.lang.Object getResetValuesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `reuseValuesInput`<sup>Optional</sup> <a name="reuseValuesInput" id="@cdktf/provider-helm.release.Release.property.reuseValuesInput"></a>

```java
public java.lang.Object getReuseValuesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `setInput`<sup>Optional</sup> <a name="setInput" id="@cdktf/provider-helm.release.Release.property.setInput"></a>

```java
public java.lang.Object getSetInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.release.ReleaseSet">ReleaseSet</a>>

---

##### `setListInput`<sup>Optional</sup> <a name="setListInput" id="@cdktf/provider-helm.release.Release.property.setListInput"></a>

```java
public java.lang.Object getSetListInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>>

---

##### `setSensitiveInput`<sup>Optional</sup> <a name="setSensitiveInput" id="@cdktf/provider-helm.release.Release.property.setSensitiveInput"></a>

```java
public java.lang.Object getSetSensitiveInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>>

---

##### `skipCrdsInput`<sup>Optional</sup> <a name="skipCrdsInput" id="@cdktf/provider-helm.release.Release.property.skipCrdsInput"></a>

```java
public java.lang.Object getSkipCrdsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-helm.release.Release.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-helm.release.Release.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `verifyInput`<sup>Optional</sup> <a name="verifyInput" id="@cdktf/provider-helm.release.Release.property.verifyInput"></a>

```java
public java.lang.Object getVerifyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-helm.release.Release.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `waitForJobsInput`<sup>Optional</sup> <a name="waitForJobsInput" id="@cdktf/provider-helm.release.Release.property.waitForJobsInput"></a>

```java
public java.lang.Object getWaitForJobsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `waitInput`<sup>Optional</sup> <a name="waitInput" id="@cdktf/provider-helm.release.Release.property.waitInput"></a>

```java
public java.lang.Object getWaitInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `atomic`<sup>Required</sup> <a name="atomic" id="@cdktf/provider-helm.release.Release.property.atomic"></a>

```java
public java.lang.Object getAtomic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `chart`<sup>Required</sup> <a name="chart" id="@cdktf/provider-helm.release.Release.property.chart"></a>

```java
public java.lang.String getChart();
```

- *Type:* java.lang.String

---

##### `cleanupOnFail`<sup>Required</sup> <a name="cleanupOnFail" id="@cdktf/provider-helm.release.Release.property.cleanupOnFail"></a>

```java
public java.lang.Object getCleanupOnFail();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `createNamespace`<sup>Required</sup> <a name="createNamespace" id="@cdktf/provider-helm.release.Release.property.createNamespace"></a>

```java
public java.lang.Object getCreateNamespace();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dependencyUpdate`<sup>Required</sup> <a name="dependencyUpdate" id="@cdktf/provider-helm.release.Release.property.dependencyUpdate"></a>

```java
public java.lang.Object getDependencyUpdate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-helm.release.Release.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `devel`<sup>Required</sup> <a name="devel" id="@cdktf/provider-helm.release.Release.property.devel"></a>

```java
public java.lang.Object getDevel();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableCrdHooks`<sup>Required</sup> <a name="disableCrdHooks" id="@cdktf/provider-helm.release.Release.property.disableCrdHooks"></a>

```java
public java.lang.Object getDisableCrdHooks();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableOpenapiValidation`<sup>Required</sup> <a name="disableOpenapiValidation" id="@cdktf/provider-helm.release.Release.property.disableOpenapiValidation"></a>

```java
public java.lang.Object getDisableOpenapiValidation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableWebhooks`<sup>Required</sup> <a name="disableWebhooks" id="@cdktf/provider-helm.release.Release.property.disableWebhooks"></a>

```java
public java.lang.Object getDisableWebhooks();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forceUpdate`<sup>Required</sup> <a name="forceUpdate" id="@cdktf/provider-helm.release.Release.property.forceUpdate"></a>

```java
public java.lang.Object getForceUpdate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-helm.release.Release.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyring`<sup>Required</sup> <a name="keyring" id="@cdktf/provider-helm.release.Release.property.keyring"></a>

```java
public java.lang.String getKeyring();
```

- *Type:* java.lang.String

---

##### `lint`<sup>Required</sup> <a name="lint" id="@cdktf/provider-helm.release.Release.property.lint"></a>

```java
public java.lang.Object getLint();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxHistory`<sup>Required</sup> <a name="maxHistory" id="@cdktf/provider-helm.release.Release.property.maxHistory"></a>

```java
public java.lang.Number getMaxHistory();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.release.Release.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-helm.release.Release.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `passCredentials`<sup>Required</sup> <a name="passCredentials" id="@cdktf/provider-helm.release.Release.property.passCredentials"></a>

```java
public java.lang.Object getPassCredentials();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `recreatePods`<sup>Required</sup> <a name="recreatePods" id="@cdktf/provider-helm.release.Release.property.recreatePods"></a>

```java
public java.lang.Object getRecreatePods();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `renderSubchartNotes`<sup>Required</sup> <a name="renderSubchartNotes" id="@cdktf/provider-helm.release.Release.property.renderSubchartNotes"></a>

```java
public java.lang.Object getRenderSubchartNotes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `replace`<sup>Required</sup> <a name="replace" id="@cdktf/provider-helm.release.Release.property.replace"></a>

```java
public java.lang.Object getReplace();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-helm.release.Release.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `repositoryCaFile`<sup>Required</sup> <a name="repositoryCaFile" id="@cdktf/provider-helm.release.Release.property.repositoryCaFile"></a>

```java
public java.lang.String getRepositoryCaFile();
```

- *Type:* java.lang.String

---

##### `repositoryCertFile`<sup>Required</sup> <a name="repositoryCertFile" id="@cdktf/provider-helm.release.Release.property.repositoryCertFile"></a>

```java
public java.lang.String getRepositoryCertFile();
```

- *Type:* java.lang.String

---

##### `repositoryKeyFile`<sup>Required</sup> <a name="repositoryKeyFile" id="@cdktf/provider-helm.release.Release.property.repositoryKeyFile"></a>

```java
public java.lang.String getRepositoryKeyFile();
```

- *Type:* java.lang.String

---

##### `repositoryPassword`<sup>Required</sup> <a name="repositoryPassword" id="@cdktf/provider-helm.release.Release.property.repositoryPassword"></a>

```java
public java.lang.String getRepositoryPassword();
```

- *Type:* java.lang.String

---

##### `repositoryUsername`<sup>Required</sup> <a name="repositoryUsername" id="@cdktf/provider-helm.release.Release.property.repositoryUsername"></a>

```java
public java.lang.String getRepositoryUsername();
```

- *Type:* java.lang.String

---

##### `resetValues`<sup>Required</sup> <a name="resetValues" id="@cdktf/provider-helm.release.Release.property.resetValues"></a>

```java
public java.lang.Object getResetValues();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `reuseValues`<sup>Required</sup> <a name="reuseValues" id="@cdktf/provider-helm.release.Release.property.reuseValues"></a>

```java
public java.lang.Object getReuseValues();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipCrds`<sup>Required</sup> <a name="skipCrds" id="@cdktf/provider-helm.release.Release.property.skipCrds"></a>

```java
public java.lang.Object getSkipCrds();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-helm.release.Release.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-helm.release.Release.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `verify`<sup>Required</sup> <a name="verify" id="@cdktf/provider-helm.release.Release.property.verify"></a>

```java
public java.lang.Object getVerify();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-helm.release.Release.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `wait`<sup>Required</sup> <a name="wait" id="@cdktf/provider-helm.release.Release.property.wait"></a>

```java
public java.lang.Object getWait();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `waitForJobs`<sup>Required</sup> <a name="waitForJobs" id="@cdktf/provider-helm.release.Release.property.waitForJobs"></a>

```java
public java.lang.Object getWaitForJobs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.Release.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-helm.release.Release.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ReleaseConfig <a name="ReleaseConfig" id="@cdktf/provider-helm.release.ReleaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.release.ReleaseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.helm.release.ReleaseConfig;

ReleaseConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .chart(java.lang.String)
    .name(java.lang.String)
//  .atomic(java.lang.Boolean)
//  .atomic(IResolvable)
//  .cleanupOnFail(java.lang.Boolean)
//  .cleanupOnFail(IResolvable)
//  .createNamespace(java.lang.Boolean)
//  .createNamespace(IResolvable)
//  .dependencyUpdate(java.lang.Boolean)
//  .dependencyUpdate(IResolvable)
//  .description(java.lang.String)
//  .devel(java.lang.Boolean)
//  .devel(IResolvable)
//  .disableCrdHooks(java.lang.Boolean)
//  .disableCrdHooks(IResolvable)
//  .disableOpenapiValidation(java.lang.Boolean)
//  .disableOpenapiValidation(IResolvable)
//  .disableWebhooks(java.lang.Boolean)
//  .disableWebhooks(IResolvable)
//  .forceUpdate(java.lang.Boolean)
//  .forceUpdate(IResolvable)
//  .id(java.lang.String)
//  .keyring(java.lang.String)
//  .lint(java.lang.Boolean)
//  .lint(IResolvable)
//  .maxHistory(java.lang.Number)
//  .namespace(java.lang.String)
//  .passCredentials(java.lang.Boolean)
//  .passCredentials(IResolvable)
//  .postrender(ReleasePostrender)
//  .recreatePods(java.lang.Boolean)
//  .recreatePods(IResolvable)
//  .renderSubchartNotes(java.lang.Boolean)
//  .renderSubchartNotes(IResolvable)
//  .replace(java.lang.Boolean)
//  .replace(IResolvable)
//  .repository(java.lang.String)
//  .repositoryCaFile(java.lang.String)
//  .repositoryCertFile(java.lang.String)
//  .repositoryKeyFile(java.lang.String)
//  .repositoryPassword(java.lang.String)
//  .repositoryUsername(java.lang.String)
//  .resetValues(java.lang.Boolean)
//  .resetValues(IResolvable)
//  .reuseValues(java.lang.Boolean)
//  .reuseValues(IResolvable)
//  .set(IResolvable)
//  .set(java.util.List<ReleaseSet>)
//  .setList(IResolvable)
//  .setList(java.util.List<ReleaseSetListStruct>)
//  .setSensitive(IResolvable)
//  .setSensitive(java.util.List<ReleaseSetSensitive>)
//  .skipCrds(java.lang.Boolean)
//  .skipCrds(IResolvable)
//  .timeout(java.lang.Number)
//  .values(java.util.List<java.lang.String>)
//  .verify(java.lang.Boolean)
//  .verify(IResolvable)
//  .version(java.lang.String)
//  .wait(java.lang.Boolean)
//  .wait(IResolvable)
//  .waitForJobs(java.lang.Boolean)
//  .waitForJobs(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.chart">chart</a></code> | <code>java.lang.String</code> | Chart name to be installed. A path may be used. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.name">name</a></code> | <code>java.lang.String</code> | Release name. The length must not be longer than 53 characters. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.atomic">atomic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, installation process purges chart on fail. The wait flag will be set automatically if atomic is used. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.cleanupOnFail">cleanupOnFail</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow deletion of new resources created in this upgrade when upgrade fails. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.createNamespace">createNamespace</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Create the namespace if it does not exist. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.dependencyUpdate">dependencyUpdate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Run helm dependency update before installing the chart. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.description">description</a></code> | <code>java.lang.String</code> | Add a custom description. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.devel">devel</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.disableCrdHooks">disableCrdHooks</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Prevent CRD hooks from, running, but run other hooks.  See helm install --no-crd-hook. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.disableOpenapiValidation">disableOpenapiValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.disableWebhooks">disableWebhooks</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Prevent hooks from running. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.forceUpdate">forceUpdate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Force resource update through delete/recreate if needed. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#id Release#id}. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.keyring">keyring</a></code> | <code>java.lang.String</code> | Location of public keys used for verification. Used only if `verify` is true. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.lint">lint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Run helm lint when planning. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.maxHistory">maxHistory</a></code> | <code>java.lang.Number</code> | Limit the maximum number of revisions saved per release. Use 0 for no limit. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace to install the release into. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.passCredentials">passCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Pass credentials to all domains. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.postrender">postrender</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleasePostrender">ReleasePostrender</a></code> | postrender block. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.recreatePods">recreatePods</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Perform pods restart during upgrade/rollback. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.renderSubchartNotes">renderSubchartNotes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, render subchart notes along with the parent. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.replace">replace</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Re-use the given name, even if that name is already used. This is unsafe in production. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.repository">repository</a></code> | <code>java.lang.String</code> | Repository where to locate the requested chart. If is a URL the chart is installed without installing the repository. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.repositoryCaFile">repositoryCaFile</a></code> | <code>java.lang.String</code> | The Repositories CA File. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.repositoryCertFile">repositoryCertFile</a></code> | <code>java.lang.String</code> | The repositories cert file. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.repositoryKeyFile">repositoryKeyFile</a></code> | <code>java.lang.String</code> | The repositories cert key file. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.repositoryPassword">repositoryPassword</a></code> | <code>java.lang.String</code> | Password for HTTP basic authentication. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.repositoryUsername">repositoryUsername</a></code> | <code>java.lang.String</code> | Username for HTTP basic authentication. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.resetValues">resetValues</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When upgrading, reset the values to the ones built into the chart. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.reuseValues">reuseValues</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.set">set</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.release.ReleaseSet">ReleaseSet</a>></code> | set block. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.setList">setList</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>></code> | set_list block. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.setSensitive">setSensitive</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>></code> | set_sensitive block. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.skipCrds">skipCrds</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, no CRDs will be installed. By default, CRDs are installed if not already present. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | Time in seconds to wait for any individual kubernetes operation. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | List of values in raw yaml format to pass to helm. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.verify">verify</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Verify the package before installing it. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.version">version</a></code> | <code>java.lang.String</code> | Specify the exact chart version to install. If this is not specified, the latest version is installed. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.wait">wait</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Will wait until all resources are in a ready state before marking the release as successful. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.waitForJobs">waitForJobs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If wait is enabled, will wait until all Jobs have been completed before marking the release as successful. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-helm.release.ReleaseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-helm.release.ReleaseConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-helm.release.ReleaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-helm.release.ReleaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-helm.release.ReleaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-helm.release.ReleaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-helm.release.ReleaseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `chart`<sup>Required</sup> <a name="chart" id="@cdktf/provider-helm.release.ReleaseConfig.property.chart"></a>

```java
public java.lang.String getChart();
```

- *Type:* java.lang.String

Chart name to be installed. A path may be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#chart Release#chart}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.release.ReleaseConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Release name. The length must not be longer than 53 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#name Release#name}

---

##### `atomic`<sup>Optional</sup> <a name="atomic" id="@cdktf/provider-helm.release.ReleaseConfig.property.atomic"></a>

```java
public java.lang.Object getAtomic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, installation process purges chart on fail. The wait flag will be set automatically if atomic is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#atomic Release#atomic}

---

##### `cleanupOnFail`<sup>Optional</sup> <a name="cleanupOnFail" id="@cdktf/provider-helm.release.ReleaseConfig.property.cleanupOnFail"></a>

```java
public java.lang.Object getCleanupOnFail();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow deletion of new resources created in this upgrade when upgrade fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#cleanup_on_fail Release#cleanup_on_fail}

---

##### `createNamespace`<sup>Optional</sup> <a name="createNamespace" id="@cdktf/provider-helm.release.ReleaseConfig.property.createNamespace"></a>

```java
public java.lang.Object getCreateNamespace();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Create the namespace if it does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#create_namespace Release#create_namespace}

---

##### `dependencyUpdate`<sup>Optional</sup> <a name="dependencyUpdate" id="@cdktf/provider-helm.release.ReleaseConfig.property.dependencyUpdate"></a>

```java
public java.lang.Object getDependencyUpdate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Run helm dependency update before installing the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#dependency_update Release#dependency_update}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-helm.release.ReleaseConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Add a custom description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#description Release#description}

---

##### `devel`<sup>Optional</sup> <a name="devel" id="@cdktf/provider-helm.release.ReleaseConfig.property.devel"></a>

```java
public java.lang.Object getDevel();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#devel Release#devel}

---

##### `disableCrdHooks`<sup>Optional</sup> <a name="disableCrdHooks" id="@cdktf/provider-helm.release.ReleaseConfig.property.disableCrdHooks"></a>

```java
public java.lang.Object getDisableCrdHooks();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Prevent CRD hooks from, running, but run other hooks.  See helm install --no-crd-hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#disable_crd_hooks Release#disable_crd_hooks}

---

##### `disableOpenapiValidation`<sup>Optional</sup> <a name="disableOpenapiValidation" id="@cdktf/provider-helm.release.ReleaseConfig.property.disableOpenapiValidation"></a>

```java
public java.lang.Object getDisableOpenapiValidation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#disable_openapi_validation Release#disable_openapi_validation}

---

##### `disableWebhooks`<sup>Optional</sup> <a name="disableWebhooks" id="@cdktf/provider-helm.release.ReleaseConfig.property.disableWebhooks"></a>

```java
public java.lang.Object getDisableWebhooks();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Prevent hooks from running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#disable_webhooks Release#disable_webhooks}

---

##### `forceUpdate`<sup>Optional</sup> <a name="forceUpdate" id="@cdktf/provider-helm.release.ReleaseConfig.property.forceUpdate"></a>

```java
public java.lang.Object getForceUpdate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Force resource update through delete/recreate if needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#force_update Release#force_update}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-helm.release.ReleaseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#id Release#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyring`<sup>Optional</sup> <a name="keyring" id="@cdktf/provider-helm.release.ReleaseConfig.property.keyring"></a>

```java
public java.lang.String getKeyring();
```

- *Type:* java.lang.String

Location of public keys used for verification. Used only if `verify` is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#keyring Release#keyring}

---

##### `lint`<sup>Optional</sup> <a name="lint" id="@cdktf/provider-helm.release.ReleaseConfig.property.lint"></a>

```java
public java.lang.Object getLint();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Run helm lint when planning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#lint Release#lint}

---

##### `maxHistory`<sup>Optional</sup> <a name="maxHistory" id="@cdktf/provider-helm.release.ReleaseConfig.property.maxHistory"></a>

```java
public java.lang.Number getMaxHistory();
```

- *Type:* java.lang.Number

Limit the maximum number of revisions saved per release. Use 0 for no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#max_history Release#max_history}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-helm.release.ReleaseConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace to install the release into.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#namespace Release#namespace}

---

##### `passCredentials`<sup>Optional</sup> <a name="passCredentials" id="@cdktf/provider-helm.release.ReleaseConfig.property.passCredentials"></a>

```java
public java.lang.Object getPassCredentials();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Pass credentials to all domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#pass_credentials Release#pass_credentials}

---

##### `postrender`<sup>Optional</sup> <a name="postrender" id="@cdktf/provider-helm.release.ReleaseConfig.property.postrender"></a>

```java
public ReleasePostrender getPostrender();
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleasePostrender">ReleasePostrender</a>

postrender block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#postrender Release#postrender}

---

##### `recreatePods`<sup>Optional</sup> <a name="recreatePods" id="@cdktf/provider-helm.release.ReleaseConfig.property.recreatePods"></a>

```java
public java.lang.Object getRecreatePods();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Perform pods restart during upgrade/rollback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#recreate_pods Release#recreate_pods}

---

##### `renderSubchartNotes`<sup>Optional</sup> <a name="renderSubchartNotes" id="@cdktf/provider-helm.release.ReleaseConfig.property.renderSubchartNotes"></a>

```java
public java.lang.Object getRenderSubchartNotes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, render subchart notes along with the parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#render_subchart_notes Release#render_subchart_notes}

---

##### `replace`<sup>Optional</sup> <a name="replace" id="@cdktf/provider-helm.release.ReleaseConfig.property.replace"></a>

```java
public java.lang.Object getReplace();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Re-use the given name, even if that name is already used. This is unsafe in production.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#replace Release#replace}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktf/provider-helm.release.ReleaseConfig.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

Repository where to locate the requested chart. If is a URL the chart is installed without installing the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#repository Release#repository}

---

##### `repositoryCaFile`<sup>Optional</sup> <a name="repositoryCaFile" id="@cdktf/provider-helm.release.ReleaseConfig.property.repositoryCaFile"></a>

```java
public java.lang.String getRepositoryCaFile();
```

- *Type:* java.lang.String

The Repositories CA File.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#repository_ca_file Release#repository_ca_file}

---

##### `repositoryCertFile`<sup>Optional</sup> <a name="repositoryCertFile" id="@cdktf/provider-helm.release.ReleaseConfig.property.repositoryCertFile"></a>

```java
public java.lang.String getRepositoryCertFile();
```

- *Type:* java.lang.String

The repositories cert file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#repository_cert_file Release#repository_cert_file}

---

##### `repositoryKeyFile`<sup>Optional</sup> <a name="repositoryKeyFile" id="@cdktf/provider-helm.release.ReleaseConfig.property.repositoryKeyFile"></a>

```java
public java.lang.String getRepositoryKeyFile();
```

- *Type:* java.lang.String

The repositories cert key file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#repository_key_file Release#repository_key_file}

---

##### `repositoryPassword`<sup>Optional</sup> <a name="repositoryPassword" id="@cdktf/provider-helm.release.ReleaseConfig.property.repositoryPassword"></a>

```java
public java.lang.String getRepositoryPassword();
```

- *Type:* java.lang.String

Password for HTTP basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#repository_password Release#repository_password}

---

##### `repositoryUsername`<sup>Optional</sup> <a name="repositoryUsername" id="@cdktf/provider-helm.release.ReleaseConfig.property.repositoryUsername"></a>

```java
public java.lang.String getRepositoryUsername();
```

- *Type:* java.lang.String

Username for HTTP basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#repository_username Release#repository_username}

---

##### `resetValues`<sup>Optional</sup> <a name="resetValues" id="@cdktf/provider-helm.release.ReleaseConfig.property.resetValues"></a>

```java
public java.lang.Object getResetValues();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When upgrading, reset the values to the ones built into the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#reset_values Release#reset_values}

---

##### `reuseValues`<sup>Optional</sup> <a name="reuseValues" id="@cdktf/provider-helm.release.ReleaseConfig.property.reuseValues"></a>

```java
public java.lang.Object getReuseValues();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#reuse_values Release#reuse_values}

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-helm.release.ReleaseConfig.property.set"></a>

```java
public java.lang.Object getSet();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.release.ReleaseSet">ReleaseSet</a>>

set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#set Release#set}

---

##### `setList`<sup>Optional</sup> <a name="setList" id="@cdktf/provider-helm.release.ReleaseConfig.property.setList"></a>

```java
public java.lang.Object getSetList();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>>

set_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#set_list Release#set_list}

---

##### `setSensitive`<sup>Optional</sup> <a name="setSensitive" id="@cdktf/provider-helm.release.ReleaseConfig.property.setSensitive"></a>

```java
public java.lang.Object getSetSensitive();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>>

set_sensitive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#set_sensitive Release#set_sensitive}

---

##### `skipCrds`<sup>Optional</sup> <a name="skipCrds" id="@cdktf/provider-helm.release.ReleaseConfig.property.skipCrds"></a>

```java
public java.lang.Object getSkipCrds();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, no CRDs will be installed. By default, CRDs are installed if not already present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#skip_crds Release#skip_crds}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-helm.release.ReleaseConfig.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

Time in seconds to wait for any individual kubernetes operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#timeout Release#timeout}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-helm.release.ReleaseConfig.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

List of values in raw yaml format to pass to helm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#values Release#values}

---

##### `verify`<sup>Optional</sup> <a name="verify" id="@cdktf/provider-helm.release.ReleaseConfig.property.verify"></a>

```java
public java.lang.Object getVerify();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Verify the package before installing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#verify Release#verify}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-helm.release.ReleaseConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Specify the exact chart version to install. If this is not specified, the latest version is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#version Release#version}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktf/provider-helm.release.ReleaseConfig.property.wait"></a>

```java
public java.lang.Object getWait();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Will wait until all resources are in a ready state before marking the release as successful.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#wait Release#wait}

---

##### `waitForJobs`<sup>Optional</sup> <a name="waitForJobs" id="@cdktf/provider-helm.release.ReleaseConfig.property.waitForJobs"></a>

```java
public java.lang.Object getWaitForJobs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If wait is enabled, will wait until all Jobs have been completed before marking the release as successful.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#wait_for_jobs Release#wait_for_jobs}

---

### ReleaseMetadata <a name="ReleaseMetadata" id="@cdktf/provider-helm.release.ReleaseMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.release.ReleaseMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.helm.release.ReleaseMetadata;

ReleaseMetadata.builder()
    .build();
```


### ReleasePostrender <a name="ReleasePostrender" id="@cdktf/provider-helm.release.ReleasePostrender"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.release.ReleasePostrender.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.helm.release.ReleasePostrender;

ReleasePostrender.builder()
    .binaryPath(java.lang.String)
//  .args(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrender.property.binaryPath">binaryPath</a></code> | <code>java.lang.String</code> | The command binary path. |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrender.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | an argument to the post-renderer (can specify multiple). |

---

##### `binaryPath`<sup>Required</sup> <a name="binaryPath" id="@cdktf/provider-helm.release.ReleasePostrender.property.binaryPath"></a>

```java
public java.lang.String getBinaryPath();
```

- *Type:* java.lang.String

The command binary path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#binary_path Release#binary_path}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-helm.release.ReleasePostrender.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

an argument to the post-renderer (can specify multiple).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#args Release#args}

---

### ReleaseSet <a name="ReleaseSet" id="@cdktf/provider-helm.release.ReleaseSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.release.ReleaseSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.helm.release.ReleaseSet;

ReleaseSet.builder()
    .name(java.lang.String)
    .value(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSet.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#name Release#name}. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSet.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#value Release#value}. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSet.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#type Release#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.release.ReleaseSet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#name Release#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.ReleaseSet.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#value Release#value}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-helm.release.ReleaseSet.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#type Release#type}.

---

### ReleaseSetListStruct <a name="ReleaseSetListStruct" id="@cdktf/provider-helm.release.ReleaseSetListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.release.ReleaseSetListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.helm.release.ReleaseSetListStruct;

ReleaseSetListStruct.builder()
    .name(java.lang.String)
    .value(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStruct.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#name Release#name}. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStruct.property.value">value</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#value Release#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.release.ReleaseSetListStruct.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#name Release#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.ReleaseSetListStruct.property.value"></a>

```java
public java.util.List<java.lang.String> getValue();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#value Release#value}.

---

### ReleaseSetSensitive <a name="ReleaseSetSensitive" id="@cdktf/provider-helm.release.ReleaseSetSensitive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.release.ReleaseSetSensitive.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.helm.release.ReleaseSetSensitive;

ReleaseSetSensitive.builder()
    .name(java.lang.String)
    .value(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitive.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#name Release#name}. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitive.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#value Release#value}. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitive.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#type Release#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.release.ReleaseSetSensitive.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#name Release#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.ReleaseSetSensitive.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#value Release#value}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-helm.release.ReleaseSetSensitive.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#type Release#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ReleaseMetadataList <a name="ReleaseMetadataList" id="@cdktf/provider-helm.release.ReleaseMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleaseMetadataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.helm.release.ReleaseMetadataList;

new ReleaseMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.release.ReleaseMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-helm.release.ReleaseMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-helm.release.ReleaseMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.release.ReleaseMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleaseMetadataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-helm.release.ReleaseMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-helm.release.ReleaseMetadataList.get"></a>

```java
public ReleaseMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-helm.release.ReleaseMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-helm.release.ReleaseMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.release.ReleaseMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ReleaseMetadataOutputReference <a name="ReleaseMetadataOutputReference" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.helm.release.ReleaseMetadataOutputReference;

new ReleaseMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.appVersion">appVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.chart">chart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.revision">revision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.values">values</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleaseMetadata">ReleaseMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appVersion`<sup>Required</sup> <a name="appVersion" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.appVersion"></a>

```java
public java.lang.String getAppVersion();
```

- *Type:* java.lang.String

---

##### `chart`<sup>Required</sup> <a name="chart" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.chart"></a>

```java
public java.lang.String getChart();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.revision"></a>

```java
public java.lang.Number getRevision();
```

- *Type:* java.lang.Number

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.values"></a>

```java
public java.lang.String getValues();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.internalValue"></a>

```java
public ReleaseMetadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleaseMetadata">ReleaseMetadata</a>

---


### ReleasePostrenderOutputReference <a name="ReleasePostrenderOutputReference" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.helm.release.ReleasePostrenderOutputReference;

new ReleasePostrenderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.resetArgs">resetArgs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.resetArgs"></a>

```java
public void resetArgs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.binaryPathInput">binaryPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.binaryPath">binaryPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleasePostrender">ReleasePostrender</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `binaryPathInput`<sup>Optional</sup> <a name="binaryPathInput" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.binaryPathInput"></a>

```java
public java.lang.String getBinaryPathInput();
```

- *Type:* java.lang.String

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `binaryPath`<sup>Required</sup> <a name="binaryPath" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.binaryPath"></a>

```java
public java.lang.String getBinaryPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.internalValue"></a>

```java
public ReleasePostrender getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleasePostrender">ReleasePostrender</a>

---


### ReleaseSetList <a name="ReleaseSetList" id="@cdktf/provider-helm.release.ReleaseSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleaseSetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.helm.release.ReleaseSetList;

new ReleaseSetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.release.ReleaseSetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-helm.release.ReleaseSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-helm.release.ReleaseSetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.release.ReleaseSetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleaseSetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-helm.release.ReleaseSetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-helm.release.ReleaseSetList.get"></a>

```java
public ReleaseSetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-helm.release.ReleaseSetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.release.ReleaseSet">ReleaseSet</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-helm.release.ReleaseSetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.release.ReleaseSetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-helm.release.ReleaseSetList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.release.ReleaseSet">ReleaseSet</a>>

---


### ReleaseSetListStructList <a name="ReleaseSetListStructList" id="@cdktf/provider-helm.release.ReleaseSetListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleaseSetListStructList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.helm.release.ReleaseSetListStructList;

new ReleaseSetListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.release.ReleaseSetListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-helm.release.ReleaseSetListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-helm.release.ReleaseSetListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.release.ReleaseSetListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleaseSetListStructList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-helm.release.ReleaseSetListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-helm.release.ReleaseSetListStructList.get"></a>

```java
public ReleaseSetListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-helm.release.ReleaseSetListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-helm.release.ReleaseSetListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.release.ReleaseSetListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-helm.release.ReleaseSetListStructList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>>

---


### ReleaseSetListStructOutputReference <a name="ReleaseSetListStructOutputReference" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.helm.release.ReleaseSetListStructOutputReference;

new ReleaseSetListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.valueInput">valueInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.value">value</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.valueInput"></a>

```java
public java.util.List<java.lang.String> getValueInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.value"></a>

```java
public java.util.List<java.lang.String> getValue();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>

---


### ReleaseSetOutputReference <a name="ReleaseSetOutputReference" id="@cdktf/provider-helm.release.ReleaseSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.helm.release.ReleaseSetOutputReference;

new ReleaseSetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-helm.release.ReleaseSet">ReleaseSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-helm.release.ReleaseSet">ReleaseSet</a>

---


### ReleaseSetSensitiveList <a name="ReleaseSetSensitiveList" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.helm.release.ReleaseSetSensitiveList;

new ReleaseSetSensitiveList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.get"></a>

```java
public ReleaseSetSensitiveOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>>

---


### ReleaseSetSensitiveOutputReference <a name="ReleaseSetSensitiveOutputReference" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.helm.release.ReleaseSetSensitiveOutputReference;

new ReleaseSetSensitiveOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>

---



