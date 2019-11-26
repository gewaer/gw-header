<template>
    <div v-if="showSwitcher" class="company-switcher">
        <multiselect
            :allow-empty="false"
            :options="companiesList"
            :searchable="false"
            :show-labels="false"
            :value="companyData.branch"
            group-values="branches"
            group-label="name"
            label="name"
            @select="company => $emit('select', company)"
        />
    </div>
</template>

<script>
/**
 * @NOTE value is used instead of v-model because we are reloading the page
 * and we do not need VueMultiselect to update anything for us.
 * See also: switchCompany()
 */
export default {
    name: "GwCompaniesSwitcher",
    props: {
        companyData: {
            type: Object,
            required: true
        },
        companiesList: {
            type: Array,
            default() {
                return []
            }
        }
    },
    computed: {
        showSwitcher() {
            return this.companiesList.length > 1 || this.companyData.branches && this.companyData.branches.length > 1;
        }
    }
}
</script>

<style lang="scss">
.company-switcher {
    display: flex;
    align-items: center;
    order: 4;
    position: relative;
    margin-left: 20px;

    .multiselect {
        .multiselect__select {
            font-family: "Font Awesome 5 Pro";
            font-weight: 900;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1;

            &::before {
                border-width: 0;
                content: "\f14d";
                top: initial;
                margin-top: 0;
                color: var(--base-color);
                z-index: 1;
            }
        }

        .multiselect__tags {
            border: 0;
            display: flex;
            align-items: center;
            padding-top: 0;
            padding-left: 0;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                height: 80%;
                width: 1px;
                background-color: #A5A5A5;
                z-index: 1;

                @media (max-width: 475px) {
                    display: none;
                }
            }

            .multiselect__single {
                text-transform: capitalize;
                color: var(--base-color);
                margin-bottom: 0;
                padding-left: 20px;

                @media (max-width: 475px) {
                    padding-left: 0;
                }
            }
        }

        &.multiselect--active {
            .multiselect__select {
                transform: rotate(0);
            }
        }
    }
}

@media(max-width: 992px) {
    .company-switcher {
        padding: 0 5px;

        /deep/ .multiselect {
            .multiselect__content {
                position: fixed;
                width: 100%;
                left: 0;
                border: 0;
                background-color: white;
            }
        }
    }
}

@media (max-width: $sm) {
    .company-switcher {
        margin-left: 5px;
    }
}
</style>
