# Gewaer Header Component

Gewaer Header Component comprises the header part for the [Gewaer Frontend Kanvas](https://github.com/gewaer/frontend-canvas) application.

## Usage

```shell
npm install @gewaer/gw-header --save
```

## Documentation

Here is an implementation example of the component:

```html
<app-header
    :apps-list="appsList"
    :companies-list="companiesList"
    :company-branch-data="companyBranchData"
    :company-data="companyData"
    :notifications-count="notificationsCount"
    :show-notifications="showNotifications"
    :show-sidebar="showSidebar"
    :sidebar-state="sidebarState"
    :user-data="userData"
    @handle-sidebar="handleSidebar(!showSidebar)"
    @toggle-notifications="toggleNotifications"
    @selected-company="switchCompany"
/>
```

```javascript
import GwHeader from "@gewaer/gw-header";

export default {
    name: "MyLayout",
    components: {
        GwHeader
    }
}
```

### Customize

This package also provides exports for the inner components, in case you want to fancy your own header while still using some of what's already here.

```javascript
import { GwAppSwitcher, GwCompaniesSwitcher, GwNotifications } from "@gewaer/gw-header";

export default {
    name: "MyHeader",
    components: {
        GwAppSwitcher,
        GwCompaniesSwitcher,
        GwNotifications
    }
}
```

### Props

#### apps-list

* **type:** `Array`
* **default:** `[]` _(empty array)_
* **usage:**

    Define a list of apps that the current user has access to.

#### company-branch-data

* **type:** `Object`
* **default:** _none_
* required: _true_
* **usage:**

    Company branch data in which the user is currently working in.

#### company-data

* **type:** `Object`
* **default:** _none_
* required: _true_
* **usage:**

    Company data in which the user is currently working in.

#### companies-list

* **type:** `Array`
* **default:** `[]` _(empty array)_
* **usage:**

    List of companies to which the user can access. Feeds the Companies Switcher component.

#### notifications-count

* **type:** `Number`
* **default:** _none_
* required: _true_
* **usage:**

    Show the count for new unread notifications for the current user.

#### show-notifications

* **type:** `Boolean`
* **default:** `true`
* **usage:**

    Show or hide the notifications bell. Remember: this will render the user unable to open the notifictions panel.

#### sidebar-state

* **type:** `String`
* **default:** `hover`
* **usage:**

    Controls the user interaction with the sidebar. It allows the sidebar to remain visible (`opened`) or to show when the user moves the mouse over it (`hover`).


#### user-data

* **type:** `Object`
* **default:** _none_
* required: _true_
* **usage:**

    Data for the currently logged in user.

# License

Gewaer Header Component is open-sourced software licensed under the MIT license.
