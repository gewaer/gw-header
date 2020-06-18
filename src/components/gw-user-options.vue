<template>
    <dropdown
        :x="userDropdownCoordenates.x"
        :y="userDropdownCoordenates.y"
        :is-icon="false"
        class="user-bar"
    >
        <template slot="btn">
            <div class="user-name">
                <span class="bold">{{ userData.firstname }}</span>
                <span> {{ userData.lastname }}</span>
            </div>
            <slot name="icon">
                <i class="fas fa-chevron-down" />
            </slot>
            <div class="profile-image">
                <img v-if="userData.photo" :src="userData.photo.url">
                <img v-else src="../assets/icons/avatar-icon.png">
            </div>
        </template>
        <template slot="body">
            <span class="dropdown-title">My Profile</span>
            <router-link :to="{ name: 'settingsUsersProfile' }" class="dropdown-item">
                <span>Users Settings</span>
            </router-link>
            <router-link
                v-if="$can('company-settings', 'settingsmenu')"
                :to="{ name: 'settingsCompaniesProfile' }"
                class="dropdown-item"
            >
                <span>{{ companyData.name }} Settings</span>
            </router-link>
            <router-link
                v-if="$can('app-settings', 'settingsmenu')"
                :to="{ name: 'settingsAppsCustomFieldsList' }"
                class="dropdown-item"
            >
                <span>App Settings</span>
            </router-link>
            <router-link
                v-if="$can('companies-manager', 'settingsmenu')"
                :to="{ name: 'settingsManagerList' }"
                class="dropdown-item"
            >
                <span>Companies Manager</span>
            </router-link>
            <a href="#" class="dropdown-item logout-button" @click.prevent="logout()">
                <span>Logout</span>
                <i class="fas fa-sign-out-alt" />
            </a>
        </template>
    </dropdown>
</template>

<script>
export default {
    name: "GwUserOptions",
    props: {
        companyData: {
            type: Object,
            required: true
        },
        userData: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            userDropdownCoordenates: {
                x: -45,
                y: 0
            }
        };
    },
    created() {
        this.handleUserDropdownCoordenates();
    },
    methods: {
        handleUserDropdownCoordenates() {
            if (window.innerWidth <= 768) {
                this.userDropdownCoordenates.x = -145;
            }
        },
        logout() {
            axios({
                method: "PUT",
                url: "/auth/logout"
            }).then(() => {
                Cookies.remove("token", { path: "/", domain: process.env.VUE_APP_DOMAIN });
                this.$store.dispatch("User/setToken", null);
                this.$store.dispatch("Application/resetGlobalData");
                this.$router.push({ name: "login" });
            });
        }
    }
}
</script>

<style lang="scss">
.user-bar {
    display: flex;
    height: 100%;
    align-items: center;

    .user-name {
        margin-right: 15px;
        text-transform: capitalize;
        font-family: 'Source Sans Pro', sans-serif;
        color: #4D4F5C;
    }

    .fa-chevron-down {
        color:#A4AFB7;
        margin-right: 10px;
    }

    .profile-image {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        img {
            width: 100%;
            border-radius: 100%;
            height: initial;
        }
    }

    .logout-button {
        display: flex;
        justify-content: space-between;
        align-items: center;

        * {
            color: var(--secondary-color);
        }

        &:hover {
            * {
                color: inherit;
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .user-bar {
        padding: 0 5px;

        .user-name {
            display: none;
        }
    }
}
</style>
