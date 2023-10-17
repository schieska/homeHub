import adapterNode from '@sveltejs/adapter-node';
import adapterVercel from '@sveltejs/adapter-vercel';

let adapter;

if (process.env.DEPLOY_ENV === 'vercel') {
    adapter = adapterVercel();
} else {
    adapter = adapterNode();
}

export default {
    kit: {
        adapter: adapter,
        // ... other sveltekit options ...
    }
};
