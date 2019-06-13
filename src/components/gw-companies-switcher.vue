<template>
    <div v-if="showSwitcher" class="multi-rooftop">
        <multiselect
            :allow-empty="false"
            :options="companiesList"
            :searchable="false"
            :show-labels="false"
            :value="companyData"
            class="rooftop-select"
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

<style lang="scss" scoped>
.multi-rooftop {
    display: flex;
    align-items: center;
    padding: 0 15px;
    order: 4;
}

@media(max-width: 992px) {
    .multi-rooftop {
        padding: 0 5px;

        /deep/ .multiselect {
            .multiselect__content {
                position: fixed;
                width: 100%;
                left: 0;
                border: 0;
                margin-top: 10px;
            }
        }
    }
}
</style>
