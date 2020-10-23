import './web.url.d280cbc1.js';
import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, o as onMount, O as onDestroy, b as binding_callbacks, a as bind, f as element, e as create_component, c as space, k as claim_element, l as children, j as claim_component, h as claim_space, g as detach_dev, p as attr_dev, n as add_location, r as insert_dev, u as mount_component, w as append_dev, x as add_flush_callback, y as transition_in, z as transition_out, A as destroy_component } from './client.7294a8a7.js';
import { M as Markmap_1 } from './markmap.9c45a105.js';
import { T as Toolbar_1, s as subscribeHash } from './gist.43642b2d.js';

/* src/routes/full.svelte generated by Svelte v3.29.4 */
const file = "src/routes/full.svelte";

function create_fragment(ctx) {
	let main;
	let markmap;
	let updating_el;
	let updating_mm;
	let t;
	let toolbar;
	let current;

	function markmap_el_binding(value) {
		/*markmap_el_binding*/ ctx[3].call(null, value);
	}

	function markmap_mm_binding(value) {
		/*markmap_mm_binding*/ ctx[4].call(null, value);
	}

	let markmap_props = { content: /*content*/ ctx[1] };

	if (/*svgEl*/ ctx[0] !== void 0) {
		markmap_props.el = /*svgEl*/ ctx[0];
	}

	if (/*mm*/ ctx[2] !== void 0) {
		markmap_props.mm = /*mm*/ ctx[2];
	}

	markmap = new Markmap_1({ props: markmap_props, $$inline: true });
	binding_callbacks.push(() => bind(markmap, "el", markmap_el_binding));
	binding_callbacks.push(() => bind(markmap, "mm", markmap_mm_binding));

	toolbar = new Toolbar_1({
			props: {
				class: "absolute right-0 bottom-0 mr-2 mb-2",
				isFull: true,
				showBrand: true,
				mm: /*mm*/ ctx[2]
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			main = element("main");
			create_component(markmap.$$.fragment);
			t = space();
			create_component(toolbar.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			main = claim_element(nodes, "MAIN", { class: true });
			var main_nodes = children(main);
			claim_component(markmap.$$.fragment, main_nodes);
			t = claim_space(main_nodes);
			claim_component(toolbar.$$.fragment, main_nodes);
			main_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(main, "class", "markmap-wrapper h-screen");
			add_location(main, file, 24, 0, 434);
		},
		m: function mount(target, anchor) {
			insert_dev(target, main, anchor);
			mount_component(markmap, main, null);
			append_dev(main, t);
			mount_component(toolbar, main, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const markmap_changes = {};
			if (dirty & /*content*/ 2) markmap_changes.content = /*content*/ ctx[1];

			if (!updating_el && dirty & /*svgEl*/ 1) {
				updating_el = true;
				markmap_changes.el = /*svgEl*/ ctx[0];
				add_flush_callback(() => updating_el = false);
			}

			if (!updating_mm && dirty & /*mm*/ 4) {
				updating_mm = true;
				markmap_changes.mm = /*mm*/ ctx[2];
				add_flush_callback(() => updating_mm = false);
			}

			markmap.$set(markmap_changes);
			const toolbar_changes = {};
			if (dirty & /*mm*/ 4) toolbar_changes.mm = /*mm*/ ctx[2];
			toolbar.$set(toolbar_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(markmap.$$.fragment, local);
			transition_in(toolbar.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(markmap.$$.fragment, local);
			transition_out(toolbar.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(main);
			destroy_component(markmap);
			destroy_component(toolbar);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Full", slots, []);
	let svgEl;
	let content = "";
	let mm;
	let revoke;

	onMount(async () => {
		revoke = subscribeHash(text => {
			$$invalidate(1, content = text);
		});
	});

	onDestroy(() => {
		if (revoke) {
			revoke();
			revoke = null;
		}
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Full> was created with unknown prop '${key}'`);
	});

	function markmap_el_binding(value) {
		svgEl = value;
		$$invalidate(0, svgEl);
	}

	function markmap_mm_binding(value) {
		mm = value;
		$$invalidate(2, mm);
	}

	$$self.$capture_state = () => ({
		onMount,
		onDestroy,
		Markmap: Markmap_1,
		Toolbar: Toolbar_1,
		subscribeHash,
		svgEl,
		content,
		mm,
		revoke
	});

	$$self.$inject_state = $$props => {
		if ("svgEl" in $$props) $$invalidate(0, svgEl = $$props.svgEl);
		if ("content" in $$props) $$invalidate(1, content = $$props.content);
		if ("mm" in $$props) $$invalidate(2, mm = $$props.mm);
		if ("revoke" in $$props) revoke = $$props.revoke;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [svgEl, content, mm, markmap_el_binding, markmap_mm_binding];
}

class Full extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Full",
			options,
			id: create_fragment.name
		});
	}
}

export default Full;
