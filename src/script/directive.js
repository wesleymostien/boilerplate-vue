import Vue from 'vue';

/* ---------------------------------------------------------------------------------------------- */

Vue.directive('disabledFocus', {
	bind: function (el, binding, vnode) {
		vnode.data.handlerFocus = function (event) {
			const $el = event.target;
			$el.blur();
		};

		el.addEventListener('focus', vnode.data.handlerFocus);
	},
	unbind: function (el, binding, vnode) {
		el.removeEventListener('focus', vnode.data.handlerFocus);
	},
});

Vue.directive('disabledPropagation', {
	bind: function (el, binding, vnode) {
		vnode.data.handlerClick = function (event) {
			event.stopPropagation();
		};

		el.addEventListener('click', vnode.data.handlerClick);
	},
	unbind: function (el, binding, vnode) {
		el.removeEventListener('click', vnode.data.handlerClick);
	},
});
