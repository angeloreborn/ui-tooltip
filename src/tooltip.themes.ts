import {

} from './tooltip.styles'


let GroupStyle = (...args : OptionalStyleDeclaration[]) : OptionalStyleDeclaration => {
    for (var i = 0; i < args.length; i++) {
        Object.assign(args[0], args[i]);
    }
    return args[0];
}

// TODO: Create Themes

