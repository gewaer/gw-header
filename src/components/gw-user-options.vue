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
                <img v-if="userData.profile_image" :src="userData.profile_image">
                <img v-else src="../assets/icons/avatar-icon.png">
            </div>
        </template>
        <template slot="body">
            <span class="dropdown-title">My Profile</span>
            <router-link  v-for="item in dropdownOptionsVisible" :key="item.name" :to="{ name: item.name }" class="dropdown-item">
                <span> {{ item.label }}</span>
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
        },
        links: {
            type: [Array, null],
            default() {
                return [
                    "settingsUsersProfile",
                    "settingsCompaniesProfile",
                    "settingsAppsCustomFieldsList",
                    "settingsManagerList"
                ]
            }
        }
    },
    data() {
        return {
            userDropdownCoordenates: {
                x: -45,
                y: 0
            },
            
        };
    },
    computed: {
        dropdownOptionsAvailable() { 
            return [
                {
                    name: "settingsUsersProfile",
                    label: "Users Settings"
                }, 
                {
                    name: "settingsCompaniesProfile",
                    label: `${this.companyData.name} Settings`
                },
                {
                    name: "settingsAppsCustomFieldsList",
                    label: "App settings"
                },
                {
                   name: "settingsManagerList",
                   label: "Companies Manager"
                }
            ]
        },
        dropdownOptionsVisible() {
            return this.dropdownOptionsAvailable.filter(item => this.links.includes(item.name))
        }
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
