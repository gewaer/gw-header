<template>
    <div class="header app-header">
        <div class="left-side-header d-flex">
            <slot name="company-logo">
                <gw-company-logo
                    :company-logo="companyData.profile_image"
                    :company-name="companyData.name"
                />
            </slot>
            <gw-app-switcher v-if="false" />
        </div>
        <div class="right-side-header d-flex">
            <slot name="companies-switcher">
                <gw-companies-switcher
                    :company-data="companyData"
                    :companies-list="companiesList"
                    @select="company => $emit('selected-company', company)"
                />
            </slot>
            <gw-user-options
                :company-data="companyData"
                :user-data="userData"
            />
            <gw-notifications
                :count="notificationsCount"
                @toggle-notifications="$emit('toggle-notifications')"
            />
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
        notificationsCount: {
            type: Number,
            required: true
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
    display: flex;
    height: 60px;
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #e6e6e6;
    justify-content: space-between;
    align-items: inherit;
    padding: 0;

    .left-side-header {
        padding-left: 70px;
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
