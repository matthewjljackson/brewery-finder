# Getting Started

From the root directory run the following commands:

### 1. `npm i`
### 2. `npm run start`

## Tools used

1. `Typescript` for auto complete and type safety to reduce debugging time.
2. `Tailwind CSS` for faster styling since it was a time sensitive task.
3. `zod` for validation due to the api's response lacking consistency in the data.
4. `axios` and `swr` for making api requests.

## Api thoughts

Regarding the api, the main thing I would have liked to see would be a fewer breweries missing longitudes and latitudes so I could show all the breweries on the map. I would also have liked to see a total_count field returned with each query.

## What to do next

With more time I would like to have added more filterable options than just by_city, I would have added pagination to the brewery list, tests with react testing library and a feature such that clicking on a marker on the map would jump to the selected brewery in the list rather than just highlighting the selected brewery.
Finally, I'd have solicited the help of someone with better design capabilities than myself such that the aesthetics were more visually impressive than a generally blue theme.
