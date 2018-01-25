class Query {
    constructor( fields, hidden, select, aggregations, include, order ) {
        this.fields         = fields        || [];
        this.hidden         = hidden        || [];
        this.select         = select        || [];
        this.aggregations   = aggregations  || [];
        this.include        = include       || [];
        this.order          = order         || [];
    }

    toStringFields() {
        if( this.fields.length === 0 ) {
            return '';
        }

        return 'fields="' + this.fields.join() + '"';
    }

    toStringHidden() {
        if( this.hidden.length === 0 ) {
            return '';
        }

        return 'hidden="' + this.hidden.join() + '"';
    }

    toStringSelect() {
        if( this.select.length === 0 ) {
            return '';
        }

        const output = [];
        this.select.forEach( ( selectData ) => {
            output.push( selectData.field + selectData.operator + selectData.value );
        });

        return 'select="' + output.join() + '"';
    }
    
    toStringAggregations() {
        if( this.aggregations.length === 0 ) {
            return '';
        }

        const output = [];
        this.aggregations.forEach( ( aggregationData ) => {
            output.push( aggregationData.operator + '(' + aggregationData.field + ')' );
        });

        return 'aggregate="' + output.join() + '"';
    }

    toStringInclude() {
        if( this.include.length === 0 ) {
            return '';
        }

        const output = [];
        this.include.forEach( ( includeData ) => {
            const subquery = includeData.subquery ? includeData.subquery.toString( ';' ) : '';
            output.push( includeData.relation + '{' + subquery + '}' );
        });

        return 'include="' + output.join() + '"'; 
    }

    toStringOrder() {
        if( this.order.length === 0 ) {
            return '';
        }

        const output = [];
        this.order.forEach( ( orderData ) => {
            output.push( orderData.field + '|' + orderData.sorting );
        });

        return 'order="' + output.join() + '"';
    }

    toString( separator ) {
        separator = separator || '&';

        const fields        = this.toStringFields();
        const hidden        = this.toStringHidden();
        const select        = this.toStringSelect();
        const aggregations  = this.toStringAggregations();
        const include       = this.toStringInclude();
        const order         = this.toStringOrder();

        return [ fields, hidden, select, aggregations, include, order ].join( separator );
    }
}

export default Query;