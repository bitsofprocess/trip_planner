<template>
    <v-card>
      <v-tabs
        v-model="tab"
        bg-color="indigo"
        color="amber-accent-4"
        centered
        stacked
      >
        <v-tab value="transport">
          <v-icon>mdi-airplane</v-icon>
          transport
        </v-tab>

        <v-tab value="lodging">
          <v-icon>mdi-bed</v-icon>
          lodging
        </v-tab>

        <v-tab value="rentals">
          <v-icon>mdi-car</v-icon>
          rentals
        </v-tab>

        <v-tab value="food">
          <v-icon>mdi-food-fork-drink</v-icon>
          food
        </v-tab>

        <v-tab value="places">
          <v-icon>mdi-map-marker</v-icon>
          places
        </v-tab>
      </v-tabs>



      <v-window v-model="tab">
        <v-window-item
          value="transport"
        >
          <v-card>
            <v-card-text>
                <v-text-field
                    label="Airline"
                    placeholder="e.g. Virgin"
                ></v-text-field>
              <v-text-field
                label="Flight Number"
                placeholder="e.g. VS24"
              ></v-text-field>
              <v-text-field
                label="Depart"
                placeholder="Select Date"
              ></v-text-field>

              <v-text-field
                label="Arrive"
                placeholder="Select Date (add calendar here)"
              ></v-text-field>
              <div class="text-right">
                <v-btn color="amber-accent-4" rounded><v-icon>mdi-plus</v-icon> Add Flight</v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-window-item>

        <v-window-item
          value="lodging"
        >
          <v-card>
            <v-card-text>
              <v-text-field
                label="Name"
                placeholder="e.g. Mel's B&B"
              ></v-text-field>
              <v-text-field
                label="Street Address"
                prepend-inner-icon="mdi-map-marker"
                placeholder=""
              ></v-text-field>

              <v-text-field
                label="City"
                placeholder=""
              ></v-text-field>

              <v-text-field
                label="Region"
                placeholder="State/Province/Region"
              ></v-text-field>

              <v-text-field
                label="Zip"
                placeholder="ZIP / Postal Code"
              ></v-text-field>

              <v-autocomplete
                ref="country"
                v-model="country"
                :rules="[() => !!country || 'This field is required']"
                :items="countries"
                label="Country"
                placeholder="Select..."
                required
              ></v-autocomplete>

              <v-text-field
                label="Date Range"
                placeholder="Select Date (add calendar here)"
              ></v-text-field>

              <div class="text-right">
                <v-btn color="amber-accent-4" rounded><v-icon>mdi-plus</v-icon> Add Lodging</v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-window-item>

        <v-window-item
          value="rentals"
        >
          <v-card>
            <v-card-text>
              rentals
            </v-card-text>
          </v-card>
        </v-window-item>

        <v-window-item
          value="food"
        >
          <v-card>
            <v-card-text>
              food
            </v-card-text>
          </v-card>
        </v-window-item>

        <v-window-item
          value="places"
        >
          <v-card>
            <v-card-text>
              places
            </v-card-text>
          </v-card>
        </v-window-item>

      </v-window>
    </v-card>
  </template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const tab = ref(null)
    const countries = ref(['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', `Timor L'Este`, 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'])

    return { tab, countries }
  }
}
</script>

<style>

</style>
