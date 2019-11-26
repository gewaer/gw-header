<template>
    <div class="header app-header">
        <div @click="$emit('handle-sidebar')" class="sidebar-toggle">
            <img src="/img/icons/hamburguer-menu.png">
        </div>
        <div class="header-container">
            <div class="left-side-header d-flex">
                <slot name="company-logo">
                    <gw-company-logo
                        :company-logo="companyData.profile_image"
                        :company-name="companyData.name"
                    />
                </slot>
                <slot name="companies-switcher">
                    <gw-companies-switcher
                        :company-data="companyData"
                        :companies-list="companiesList"
                        @select="company => $emit('selected-company', company)"
                    />
                </slot>
            </div>
            <div class="right-side-header d-flex">
                <gw-user-options
                    :company-data="companyData"
                    :user-data="userData"
                />
                <gw-notifications
                    @toggle-notifications="$emit('toggle-notifications')"
                />
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
import GwAppSwitcher from "./gw-app-switcher";
import GwCompaniesSwitcher from "./gw-companies-switcher";
import GwCompanyLogo from "./gw-company-logo";
import GwNotifications from "./gw-notifications";
import GwUserOptions from "./gw-user-options";

export default {
    name: "GwHeader",
    components: {
        GwAppSwitcher,
        GwCompaniesSwitcher,
        GwCompanyLogo,
        GwNotifications,
        GwUserOptions
    },
    props: {
        companyData: {
            type: Object,
            required: true,
            validator(data) {
                return data.name;
            }
        },
        companiesList: {
            type: Array,
            default() {
                return [];
            }
        },
        showSidebar: {
            type: Boolean,
            default: false
        },
        userData: {
            type: Object,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.app-header {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    height: 60px;
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #e6e6e6;
    padding: 0;
    padding-left: 70px;
    display: flex;

    @media (max-width: $lg) {
        padding-left: 0;
    }

    .header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        margin-right: auto;
        margin-left: auto;
        padding-left: 30px;
        padding-right: 30px;
        flex: 1;

        @media (min-width: 1824px) {
            width: 1700px;
        }

        @media (max-width: $lg) {
            padding-left: 0;
        }

        @media (max-width: $sm) {
            padding-right: 10px;
        }
    }

    .sidebar-toggle {
        display: none;

        @media (max-width: $lg) {
            cursor: pointer;
            display: flex;
            width: 59px;
            height: 100%;
            background-color: var(--base-color);
            align-items: center;
            justify-content: center;
            margin-right: 20px;
        }
    }

    .notifications-center {
        order: 3;
        margin-left: 15px;
        display: flex;
        align-items: center;

        .header-icon {
            position: relative;
        }
    }
}

.desactivate-lm {
    cursor: not-allowed;
}

.desactivate-lm span, .desactivate-lm p {
    color: #ccc;
    border-color: #ccc;
}

@media(max-width: 992px) {
    .app-header {
        .notifications-center {
            display: none;
        }
    }
}

@media screen and (max-width: 768px) {
    .app-header {
        .free-trial-icon {
            display: none;
        }
    }
}
</style>
