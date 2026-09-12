const REVIEWED = 'revisado-validado';

const batches = [
  [0, 'R', REVIEWED, ['astroingenieria', 'kardashev', 'artificial-gravity', 'bernal-sphere', 'stanford-torus', 'bishop-ring', 'mckendree-cylinder', 'asteroid-habitat', 'worldship', 'iss', 'oneill-cylinder', 'life-support']],
  [1, 'A', REVIEWED, ['tipo-i', 'tipo-ii', 'tipo-iii']],
  [2, 'A', REVIEWED, ['civilizaciones-digitales', 'postbiological', 'deep-time']],
  [3, 'A', REVIEWED, ['von-neumann', 'colonizacion-galactica']],
  [3, 'B', REVIEWED, ['grabby-aliens']],
  [4, 'A', REVIEWED, ['great-filter']],
  [4, 'B', REVIEWED, ['zoo-hypothesis', 'dark-forest', 'civilizaciones-silenciosas', 'berserker']],
  [5, 'A', REVIEWED, ['seti']],
  [5, 'B', REVIEWED, ['technosignatures', 'radio-seti', 'optical-seti', 'civilizaciones-y-luz']],
  [6, 'A', REVIEWED, ['project-orion', 'fusion-propulsion', 'antimatter']],
  [6, 'B', REVIEWED, ['bussard-ramjet']],
  [7, 'A', REVIEWED, ['alcubierre', 'wormholes']],
  [7, 'B', REVIEWED, ['reactionless']],
  [8, 'B', REVIEWED, ['ion-engines', 'hall-thruster', 'solar-electric', 'nuclear-electric']],
  [9, 'B', REVIEWED, ['chemical-rockets', 'nuclear-thermal', 'solar-sail', 'beamed-propulsion']],
  [10, 'A', REVIEWED, ['laser-sail']],
  [10, 'B', REVIEWED, ['magnetic-sail', 'electric-sail', 'interstellar-braking']],
  [11, 'A', REVIEWED, ['venus-terraforming', 'floating-venus']],
  [12, 'B', REVIEWED, ['paraterraforming', 'worldhouse', 'domed-cities']],
  [13, 'A', REVIEWED, ['habitability', 'ecopoiesis']],
  [13, 'B', REVIEWED, ['habitable-zone', 'planetary-protection']],
  [14, 'B', REVIEWED, ['orbital-mirrors', 'sunshades', 'volatile-import', 'magnetosphere']],
  [15, 'A', REVIEWED, ['stellar-engines', 'caplan']],
  [15, 'B', REVIEWED, ['shkadov']],
  [16, 'A', REVIEWED, ['star-lifting']],
  [16, 'B', REVIEWED, ['stellar-husbandry', 'plasma-processing']],
  [17, 'B', REVIEWED, ['stellar-physics', 'stellar-navigation', 'stellar-technosignatures']],
  [18, 'A', REVIEWED, ['orbital-ring', 'launch-loop']],
  [18, 'B', REVIEWED, ['skyhook', 'tethers', 'mass-driver']],
  [19, 'B', REVIEWED, ['shipyards', 'orbital-ports', 'fuel-depots', 'reusable-launch']],
  [20, 'A', REVIEWED, ['lunar-bases']],
  [20, 'B', REVIEWED, ['isru', 'asteroid-mining']],
  [21, 'B', REVIEWED, ['space-based-solar', 'microwave-power', 'radiators', 'dyson-ring', 'dyson-bubble']],
  [22, 'A', REVIEWED, ['matrioshka-brain']],
  [22, 'B', REVIEWED, ['jupiter-brain', 'computronium', 'dyson-shell']],
  [23, 'A', REVIEWED, ['exoplanets', 'future-universe', 'ringworld']],
  [24, 'B', REVIEWED, ['space-law', 'cosmic-ethics']],
  [25, 'R', REVIEWED, ['space-elevator', 'dyson-swarm', 'relativistic-propulsion', 'terraforming', 'mars-terraforming', 'black-hole-engineering', 'fermi', 'astrobiology']],
];

export const editorialMinimums = { A: 900, B: 650, R: 0 };
export const editorialStatuses = ['pendiente', 'en-redaccion', 'redactado-pendiente-revision', REVIEWED];

export const editorialPlan = {};
for (const [batch, category, status, ids] of batches) {
  for (const id of ids) {
    if (editorialPlan[id]) throw new Error(`Duplicate editorial plan id: ${id}`);
    editorialPlan[id] = { batch, category, status };
  }
}
