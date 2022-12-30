<script lang="ts" setup>

const res = await fetch(`https://komgrip.co.th/coincap/assets`)
const item = await res.json()
const cryp = item.data

const perPage = 5
let page = ref(1)
console.log(page)

const paginatedData = computed(() =>
	cryp.slice((page.value - 1) * perPage, page.value * perPage)
);

const nextPage = () => {
	if (page.value !== Math.ceil(item.length / perPage)) {
		page.value += 1;
	}
};

const backPage = () => {
	if (page.value !== 1) {
		page.value -= 1;
	}
};

// const goToPage = (numPage: any) => {
// 	page.value = numPage;
// }

</script>

<template>
	<div class="row">
		<div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
			<div class="card">
				<div class="card-body p-3">
					<div class="row">
						<div class="col-8">
							<div class="numbers">
								<p class="text-sm mb-0 text-capitalize font-weight-bold">{{ cryp[0]['id'] }}</p>
								<h5 class="font-weight-bolder mb-0">
									${{ parseFloat(cryp[0]['priceUsd']).toFixed(1) }} <br>
									<span :class="cryp[0]['changePercent24Hr'] < 0 ? 'text-danger text-success text-sm font-weight-bolder' : 'text-success text-success text-sm font-weight-bolder'">
										{{ parseFloat(cryp[0]['changePercent24Hr']).toFixed(2) }}
									</span>
								</h5>
							</div>
						</div>
						<div class="col-4 text-end">
							<div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
								<i class="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
			<div class="card">
				<div class="card-body p-3">
					<div class="row">
						<div class="col-8">
							<div class="numbers">
								<p class="text-sm mb-0 text-capitalize font-weight-bold">{{ cryp[1]['id'] }}</p>
								<h5 class="font-weight-bolder mb-0">
									${{ parseFloat(cryp[1]['priceUsd']).toFixed(1) }} <br>
									<span :class="cryp[1]['changePercent24Hr'] < 0 ? 'text-danger text-success text-sm font-weight-bolder' : 'text-success text-success text-sm font-weight-bolder'">
										{{ parseFloat(cryp[1]['changePercent24Hr']).toFixed(2) }}
									</span>
								</h5>
							</div>
						</div>
						<div class="col-4 text-end">
							<div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
								<i class="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
			<div class="card">
				<div class="card-body p-3">
					<div class="row">
						<div class="col-8">
							<div class="numbers">
								<p class="text-sm mb-0 text-capitalize font-weight-bold">{{ cryp[17]['id'] }}</p>
								<h5 class="font-weight-bolder mb-0">
									${{ parseFloat(cryp[17]['priceUsd']).toFixed(1) }} <br>
									<span :class="cryp[17]['changePercent24Hr'] < 0 ? 'text-danger text-success text-sm font-weight-bolder' : 'text-success text-success text-sm font-weight-bolder'">
										{{ parseFloat(cryp[17]['changePercent24Hr']).toFixed(2) }}
									</span>
								</h5>
							</div>
						</div>
						<div class="col-4 text-end">
							<div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
								<i class="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
			<div class="card">
				<div class="card-body p-3">
					<div class="row">
						<div class="col-8">
							<div class="numbers">
								<p class="text-sm mb-0 text-capitalize font-weight-bold">{{ cryp[7]['id'] }}</p>
								<h5 class="font-weight-bolder mb-0">
									${{ parseFloat(cryp[7]['priceUsd']).toFixed(1) }} <br>
									<span :class="cryp[7]['changePercent24Hr'] < 0 ? 'text-danger text-success text-sm font-weight-bolder' : 'text-success text-success text-sm font-weight-bolder'">
										{{ parseFloat(cryp[7]['changePercent24Hr']).toFixed(2) }}
									</span>
								</h5>
							</div>
						</div>
						<div class="col-4 text-end">
							<div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
								<i class="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row my-4">
		<div class="col-lg-12 col-md-12 mb-md-0 mb-4">
			<div class="card">
				<div class="card-header pb-0">
					<div class="row">
						<div class="col-lg-6 col-7">
							<h6>Cryptocurrencies</h6>
						</div>
						<div class="col-lg-6 col-5 text-end">
							<button class="btn btn-outline-primary" :class="page != 1 ? '' : 'disabled'" @click="backPage" style="margin-right: 10px">
								<i class='fas fa-angle-left'></i>
							</button>
							<button class="btn btn-outline-primary" :class="page != Math.ceil(cryp.length / perPage) ? '' : 'disabled'" @click="nextPage">
								<i class='fas fa-angle-right'></i>
							</button>
						</div>
					</div>
				</div>
				<div class="card-body px-0 pb-2">
					<div class="table-responsive">
						<table class="table align-items-center mb-0">
							<thead>
								<tr class="text-center">
									<th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
										NO
									</th>
									<th
										class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
										NAME
									</th>
									<th
										class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
										SYMBOL
									</th>
									<th
										class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
										SUPPLY/MAX SUPPLY
									</th>
									<th
										class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
										USD
									</th>
									<th
										class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
										24 HR
									</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="items in paginatedData" :key="items.paginatedData">
									<td>
										<div class="px-2 py-1">
											<div class="text-center">
												<h6 class="mb-0 text-sm">{{ items.rank }}</h6>
											</div>
										</div>
									</td>
									<td>
										<div class="px-2 py-1">
											<div class="text-center">
												<h6 class="mb-0 text-sm">{{ items.name }}</h6>
											</div>
										</div>
									</td>
									<td>
										<div class="px-2 py-1">
											<div class="text-center">
												<h6 class="mb-0 text-sm">{{ items.symbol }}</h6>
											</div>
										</div>
									</td>
									<td>
										<div class="px-2 py-1">
											<div class="text-center">
												<h6 class="mb-0 text-sm">{{ parseFloat(items.supply).toFixed(2) }} / {{ parseFloat(items.maxSupply).toFixed(2) }}</h6>
											</div>
										</div>
									</td>
									<td>
										<div class="px-2 py-1">
											<div class="text-center">
												<h6 class="mb-0 text-sm">${{ parseFloat(items.priceUsd).toFixed(2) }}</h6>
											</div>
										</div>
									</td>
									<td>
										<div class="px-2 py-1">
											<div class="text-center">
												<h6 :class="items.changePercent24Hr < 0 ? 'text-danger mb-0 text-sm' : 'text-success mb-0 text-sm'">{{ parseFloat(items.changePercent24Hr).toFixed(2) }}</h6>
											</div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
