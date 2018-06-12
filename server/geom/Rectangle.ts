import { Point } from './Point';
import { Corner } from '../physics/Math';

/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* Creates a new Rectangle object with the top-left corner specified by the x and y parameters and with the specified width and height parameters.
* If you call this function without parameters, a Rectangle with x, y, width, and height properties set to 0 is created.
*
* @class Phaser.Rectangle
* @constructor
* @param {number} x - The x coordinate of the top-left corner of the Rectangle.
* @param {number} y - The y coordinate of the top-left corner of the Rectangle.
* @param {number} width - The width of the Rectangle. Should always be either zero or a positive value.
* @param {number} height - The height of the Rectangle. Should always be either zero or a positive value.
*/
export class Rectangle {

    constructor (
        public x: number = 0,
        public y: number = 0,
        public width: number = 0,
        public height: number = 0) {
    }

    /**
    * Adjusts the location of the Rectangle object, as determined by its top-left corner, by the specified amounts.
    * @method Phaser.Rectangle#offset
    * @param {number} dx - Moves the x value of the Rectangle object by this amount.
    * @param {number} dy - Moves the y value of the Rectangle object by this amount.
    * @return {Phaser.Rectangle} This Rectangle object.
    */
    offset(dx: number, dy: number): Rectangle {

        this.x += dx;
        this.y += dy;

        return this;

    }

    /**
    * Adjusts the location of the Rectangle object using a Point object as a parameter. This method is similar to the Rectangle.offset() method, except that it takes a Point object as a parameter.
    * @method Phaser.Rectangle#offsetPoint
    * @param {Phaser.Point} point - A Point object to use to offset this Rectangle object.
    * @return {Phaser.Rectangle} This Rectangle object.
    */
    offsetPoint(point: Point): Rectangle {

        return this.offset(point.x, point.y);

    }

    /**
    * Sets the members of Rectangle to the specified values.
    * @method Phaser.Rectangle#setTo
    * @param {number} x - The x coordinate of the top-left corner of the Rectangle.
    * @param {number} y - The y coordinate of the top-left corner of the Rectangle.
    * @param {number} width - The width of the Rectangle. Should always be either zero or a positive value.
    * @param {number} height - The height of the Rectangle. Should always be either zero or a positive value.
    * @return {Phaser.Rectangle} This Rectangle object
    */
    setTo(x: number, y: number, width: number, height: number): Rectangle {

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        return this;

    }

    /**
    * Scales the width and height of this Rectangle by the given amounts.
    *
    * @method Phaser.Rectangle#scale
    * @param {number} x - The amount to scale the width of the Rectangle by. A value of 0.5 would reduce by half, a value of 2 would double the width, etc.
    * @param {number} [y] - The amount to scale the height of the Rectangle by. A value of 0.5 would reduce by half, a value of 2 would double the height, etc.
    * @return {Phaser.Rectangle} This Rectangle object
    */
    scale(x: number, y: number): Rectangle {

        if (y === undefined) { y = x; }

        this.width *= x;
        this.height *= y;

        return this;

    }

    /**
    * Centers this Rectangle so that the center coordinates match the given x and y values.
    *
    * @method Phaser.Rectangle#centerOn
    * @param {number} x - The x coordinate to place the center of the Rectangle at.
    * @param {number} y - The y coordinate to place the center of the Rectangle at.
    * @return {Phaser.Rectangle} This Rectangle object
    */
    centerOn(x: number, y: number): Rectangle {

        this.centerX = x;
        this.centerY = y;

        return this;

    }

    /**
    * Runs Math.floor() on both the x and y values of this Rectangle.
    * @method Phaser.Rectangle#floor
    */
    floor(): Rectangle {

        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this;

    }

    /**
    * Runs Math.floor() on the x, y, width and height values of this Rectangle.
    * @method Phaser.Rectangle#floorAll
    */
    floorAll(): Rectangle {

        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this;


    }

    /**
    * Runs Math.ceil() on both the x and y values of this Rectangle.
    * @method Phaser.Rectangle#ceil
    */
    ceil(): Rectangle {

        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this;

    }

    /**
    * Runs Math.ceil() on the x, y, width and height values of this Rectangle.
    * @method Phaser.Rectangle#ceilAll
    */
    ceilAll(): Rectangle {

        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this;

    }

    /**
    * Copies the x, y, width and height properties from any given object to this Rectangle.
    * @method Phaser.Rectangle#copyFrom
    * @param {any} source - The object to copy from.
    * @return {Phaser.Rectangle} This Rectangle object.
    */
    copyFrom(source: Rectangle): Rectangle {

        return this.setTo(source.x, source.y, source.width, source.height);

    }

    /**
    * Copies the left, top, width and height properties from any given object to this Rectangle.
    * @method Phaser.Rectangle#copyFromBounds
    * @param {any} source - The object to copy from.
    * @return {Phaser.Rectangle} This Rectangle object.
    */
    copyFromBounds(source: Rectangle): Rectangle {

        return this.setTo(source.left, source.top, source.width, source.height);

    }

    /**
    * Copies the x, y, width and height properties from this Rectangle to any given object.
    * @method Phaser.Rectangle#copyTo
    * @param {any} source - The object to copy to.
    * @return {object} This object.
    */
    copyTo(dest: any): object {

        dest.x = this.x;
        dest.y = this.y;
        dest.width = this.width;
        dest.height = this.height;

        return dest;

    }

    /**
    * Increases the size of the Rectangle object by the specified amounts. The center point of the Rectangle object stays the same, and its size increases to the left and right by the dx value, and to the top and the bottom by the dy value.
    * @method Phaser.Rectangle#inflate
    * @param {number} dx - The amount to be added to the left side of the Rectangle.
    * @param {number} dy - The amount to be added to the bottom side of the Rectangle.
    * @return {Phaser.Rectangle} This Rectangle object.
    */
    inflate(dx: number, dy: number): Rectangle {

        return Rectangle.inflate(this, dx, dy);

    }

    /**
    * The size of the Rectangle object, expressed as a Point object with the values of the width and height properties.
    * @method Phaser.Rectangle#size
    * @param {Phaser.Point} [output] - Optional Point object. If given the values will be set into the object, otherwise a brand new Point object will be created and returned.
    * @return {Phaser.Point} The size of the Rectangle object.
    */
    size(output?: Point): Point {

        return Rectangle.size(this, output);

    }

    /**
    * Resize the Rectangle by providing a new width and height.
    * The x and y positions remain unchanged.
    *
    * @method Phaser.Rectangle#resize
    * @param {number} width - The width of the Rectangle. Should always be either zero or a positive value.
    * @param {number} height - The height of the Rectangle. Should always be either zero or a positive value.
    * @return {Phaser.Rectangle} This Rectangle object
    */
    resize(width: number, height: number): Rectangle {

        this.width = width;
        this.height = height;

        return this;

    }

    /**
    * Returns a new Rectangle object with the same values for the x, y, width, and height properties as the original Rectangle object.
    * @method Phaser.Rectangle#clone
    * @param {Phaser.Rectangle} [output] - Optional Rectangle object. If given the values will be set into the object, otherwise a brand new Rectangle object will be created and returned.
    * @return {Phaser.Rectangle}
    */
    clone(output?: Rectangle): Rectangle {

        return Rectangle.clone(this, output);

    }

    /**
    * Determines whether the specified coordinates are contained within the region defined by this Rectangle object.
    * @method Phaser.Rectangle#contains
    * @param {number} x - The x coordinate of the point to test.
    * @param {number} y - The y coordinate of the point to test.
    * @return {boolean} A value of true if the Rectangle object contains the specified point; otherwise false.
    */
    contains(x: number, y: number): boolean {

        return Rectangle.contains(this, x, y);

    }

    /**
    * Determines whether the first Rectangle object is fully contained within the second Rectangle object.
    * A Rectangle object is said to contain another if the second Rectangle object falls entirely within the boundaries of the first.
    * @method Phaser.Rectangle#containsRect
    * @param {Phaser.Rectangle} b - The second Rectangle object.
    * @return {boolean} A value of true if the Rectangle object contains the specified point; otherwise false.
    */
    containsRect(b: Rectangle): boolean {

        return Rectangle.containsRect(b, this);

    }

    /**
    * Determines whether the two Rectangles are equal.
    * This method compares the x, y, width and height properties of each Rectangle.
    * @method Phaser.Rectangle#equals
    * @param {Phaser.Rectangle} b - The second Rectangle object.
    * @return {boolean} A value of true if the two Rectangles have exactly the same values for the x, y, width and height properties; otherwise false.
    */
    equals(b: Rectangle): boolean {

        return Rectangle.equals(this, b);

    }

    /**
    * If the Rectangle object specified in the toIntersect parameter intersects with this Rectangle object, returns the area of intersection as a Rectangle object. If the Rectangles do not intersect, this method returns an empty Rectangle object with its properties set to 0.
    * @method Phaser.Rectangle#intersection
    * @param {Phaser.Rectangle} b - The second Rectangle object.
    * @param {Phaser.Rectangle} out - Optional Rectangle object. If given the intersection values will be set into this object, otherwise a brand new Rectangle object will be created and returned.
    * @return {Phaser.Rectangle} A Rectangle object that equals the area of intersection. If the Rectangles do not intersect, this method returns an empty Rectangle object; that is, a Rectangle with its x, y, width, and height properties set to 0.
    */
    intersection(b: Rectangle, out: Rectangle): Rectangle {

        return Rectangle.intersection(this, b, out);

    }

    /**
    * Determines whether this Rectangle and another given Rectangle intersect with each other.
    * This method checks the x, y, width, and height properties of the two Rectangles.
    *
    * @method Phaser.Rectangle#intersects
    * @param {Phaser.Rectangle} b - The second Rectangle object.
    * @return {boolean} A value of true if the specified object intersects with this Rectangle object; otherwise false.
    */
    intersects(b: Rectangle): boolean {

        return Rectangle.intersects(this, b);

    }

    /**
    * Determines whether the coordinates given intersects (overlaps) with this Rectangle.
    *
    * @method Phaser.Rectangle#intersectsRaw
    * @param {number} left - The x coordinate of the left of the area.
    * @param {number} right - The right coordinate of the area.
    * @param {number} top - The y coordinate of the area.
    * @param {number} bottom - The bottom coordinate of the area.
    * @param {number} tolerance - A tolerance value to allow for an intersection test with padding, default to 0
    * @return {boolean} A value of true if the specified object intersects with the Rectangle; otherwise false.
    */
    intersectsRaw(left: number, right: number, top: number, bottom: number, tolerance: number): boolean {

        return Rectangle.intersectsRaw(this, left, right, top, bottom, tolerance);

    }

    /**
    * Adds two Rectangles together to create a new Rectangle object, by filling in the horizontal and vertical space between the two Rectangles.
    * @method Phaser.Rectangle#union
    * @param {Phaser.Rectangle} b - The second Rectangle object.
    * @param {Phaser.Rectangle} [out] - Optional Rectangle object. If given the new values will be set into this object, otherwise a brand new Rectangle object will be created and returned.
    * @return {Phaser.Rectangle} A Rectangle object that is the union of the two Rectangles.
    */
    union(b: Rectangle, out?: Rectangle): Rectangle {

        return Rectangle.union(this, b, out);

    }

    /**
    * Returns a uniformly distributed random point from anywhere within this Rectangle.
    *
    * @method Phaser.Rectangle#random
    * @param {Phaser.Point|object} [out] - A Phaser.Point, or any object with public x/y properties, that the values will be set in.
    *     If no object is provided a new Phaser.Point object will be created. In high performance areas avoid this by re-using an existing object.
    * @return {Phaser.Point} An object containing the random point in its `x` and `y` properties.
    */
    random(out?: Point): Point {

        if (out === undefined) { out = new Point(); }

        out.x = this.randomX;
        out.y = this.randomY;

        return out;

    }

    /**
    * Returns a point based on the given position constant, which can be one of:
    *
    * `Phaser.TOP_LEFT`, `Phaser.TOP_CENTER`, `Phaser.TOP_RIGHT`, `Phaser.LEFT_CENTER`,
    * `Phaser.CENTER`, `Phaser.RIGHT_CENTER`, `Phaser.BOTTOM_LEFT`, `Phaser.BOTTOM_CENTER`
    * and `Phaser.BOTTOM_RIGHT`.
    *
    * This method returns the same values as calling Rectangle.bottomLeft, etc, but those
    * calls always create a new Point object, where-as this one allows you to use your own.
    *
    * @method Phaser.Rectangle#getPoint
    * @param {integer} [position] - One of the Phaser position constants, such as `Phaser.TOP_RIGHT`.
    * @param {Phaser.Point} [out] - A Phaser.Point that the values will be set in.
    *     If no object is provided a new Phaser.Point object will be created. In high performance areas avoid this by re-using an existing object.
    * @return {Phaser.Point} An object containing the point in its `x` and `y` properties.
    */
    getPoint(position: Corner, out?: Point): Point {

        if (out === undefined) { out = new Point(); }

        switch (position) {
            default:
            case Corner.TOP_LEFT:
                return out.set(this.x, this.y);

            case Corner.TOP_CENTER:
                return out.set(this.centerX, this.y);

            case Corner.TOP_RIGHT:
                return out.set(this.right, this.y);

            case Corner.CENTER_LEFT:
                return out.set(this.x, this.centerY);

            case Corner.CENTER:
                return out.set(this.centerX, this.centerY);

            case Corner.CENTER_RIGHT:
                return out.set(this.right, this.centerY);

            case Corner.BOTTOM_LEFT:
                return out.set(this.x, this.bottom);

            case Corner.BOTTOM_CENTER:
                return out.set(this.centerX, this.bottom);

            case Corner.BOTTOM_RIGHT:
                return out.set(this.right, this.bottom);
        }

    }

    /**
     * Creates or positions four {@link Phaser.Line} lines representing the Rectangle's sides.
     *
     * @method Phaser.Rectangle#sides
     * @param  {Phaser.Line} [top]
     * @param  {Phaser.Line} [right]
     * @param  {Phaser.Line} [bottom]
     * @param  {Phaser.Line} [left]
     * @return {?Phaser.Line[]} - An array containing four lines (if no arguments were given), or null.
    sides(top, right, bottom, left) {

        if (!arguments.length)
        {
            top = new Phaser.Line();
            right = new Phaser.Line();
            bottom = new Phaser.Line();
            left = new Phaser.Line();
        }

        var x1 = this.x;
        var y1 = this.y;
        var x2 = this.right;
        var y2 = this.bottom;

        top.setTo(x1, y1, x2, y1);
        right.setTo(x2, y1, x2, y2);
        bottom.setTo(x1, y2, x2, y2);
        left.setTo(x1, y1, x1, y2);

        if (!arguments.length)
        {
            return [ top, right, bottom, left ];
        }

        return null;

    }
     */

    /**
    * Returns a string representation of this object.
    * @method Phaser.Rectangle#toString
    * @return {string} A string representation of the instance.
    */
    toString(): string {

        return '[{Rectangle (x=' + this.x + ' y=' + this.y + ' width=' + this.width + ' height=' + this.height + ' empty=' + this.empty + ')}]';

    }

    /**
    * @name Phaser.Rectangle#halfWidth
    * @property {number} halfWidth - Half of the width of the Rectangle.
    * @readonly
    */
    get halfWidth(): number {
        return Math.round(this.width / 2);
    }


    /**
    * @name Phaser.Rectangle#halfHeight
    * @property {number} halfHeight - Half of the height of the Rectangle.
    * @readonly
    */
    get halfHeight(): number {
        return Math.round(this.height / 2);
    }

    /**
    * The sum of the y and height properties. Changing the bottom property of a Rectangle object has no effect on the x, y and width properties, but does change the height property.
    * @name Phaser.Rectangle#bottom
    * @property {number} bottom - The sum of the y and height properties.
    */
    get bottom(): number {
        return this.y + this.height;
    }

    set bottom(value: number) {
        if (value <= this.y) {
            this.height = 0;
        } else {
            this.height = value - this.y;
        }
    }

    /**
    * The location of the Rectangles bottom left corner as a Point object.
    * @name Phaser.Rectangle#bottomLeft
    * @property {Phaser.Point} bottomLeft - Gets or sets the location of the Rectangles bottom left corner as a Point object.
    */
       set bottomLeft(value: Point) {
        this.x = value.x;
        this.bottom = value.y;
    }

    /**
    * The location of the Rectangles bottom right corner as a Point object.
    * @name Phaser.Rectangle#bottomRight
    * @property {Phaser.Point} bottomRight - Gets or sets the location of the Rectangles bottom right corner as a Point object.
    */
    get bottomRight(): Point {
        return new Point(this.right, this.bottom);
    }

    set bottomRight(value: Point) {
        this.right = value.x;
        this.bottom = value.y;
    }

    /**
    * The x coordinate of the left of the Rectangle. Changing the left property of a Rectangle object has no effect on the y and height properties. However it does affect the width property, whereas changing the x value does not affect the width property.
    * @name Phaser.Rectangle#left
    * @property {number} left - The x coordinate of the left of the Rectangle.
    */
    get left(): number {
        return this.x;
    }

    set left(value: number) {
        if (value >= this.right) {
            this.width = 0;
        }
        else {
            this.width = this.right - value;
        }
        this.x = value;
    }

    /**
    * The sum of the x and width properties. Changing the right property of a Rectangle object has no effect on the x, y and height properties, however it does affect the width property.
    * @name Phaser.Rectangle#right
    * @property {number} right - The sum of the x and width properties.
    */
    get right(): number {
        return this.x + this.width;
    }

    set right(value: number) {
        if (value <= this.x) {
            this.width = 0;
        } else {
            this.width = value - this.x;
        }
    }

    /**
    * The volume of the Rectangle derived from width * height.
    * @name Phaser.Rectangle#volume
    * @property {number} volume - The volume of the Rectangle derived from width * height.
    * @readonly
    */
    get volume(): number {
        return this.width * this.height;
    }

    /**
    * The perimeter size of the Rectangle. This is the sum of all 4 sides.
    * @name Phaser.Rectangle#perimeter
    * @property {number} perimeter - The perimeter size of the Rectangle. This is the sum of all 4 sides.
    * @readonly
    */
    get perimeter(): number {
        return (this.width * 2) + (this.height * 2);
    }

    /**
    * The x coordinate of the center of the Rectangle.
    * @name Phaser.Rectangle#centerX
    * @property {number} centerX - The x coordinate of the center of the Rectangle.
    */
    get centerX(): number {
        return this.x + this.halfWidth;
    }

    set centerX(value: number) {
        this.x = value - this.halfWidth;
    }

    /**
    * The y coordinate of the center of the Rectangle.
    * @name Phaser.Rectangle#centerY
    * @property {number} centerY - The y coordinate of the center of the Rectangle.
    */
    get centerY(): number {
        return this.y + this.halfHeight;
    }

    set centerY(value: number) {
        this.y = value - this.halfHeight;
    }

    /**
    * A random value between the left and right values (inclusive) of the Rectangle.
    *
    * @name Phaser.Rectangle#randomX
    * @property {number} randomX - A random value between the left and right values (inclusive) of the Rectangle.
    */
    get randomX(): number {
        return this.x + (Math.random() * this.width);
    }

    /**
    * A random value between the top and bottom values (inclusive) of the Rectangle.
    *
    * @name Phaser.Rectangle#randomY
    * @property {number} randomY - A random value between the top and bottom values (inclusive) of the Rectangle.
    */
    get randomY(): number {
        return this.y + (Math.random() * this.height);
    }

    /**
    * The y coordinate of the top of the Rectangle. Changing the top property of a Rectangle object has no effect on the x and width properties.
    * However it does affect the height property, whereas changing the y value does not affect the height property.
    * @name Phaser.Rectangle#top
    * @property {number} top - The y coordinate of the top of the Rectangle.
    */
    get top(): number {
        return this.y;
    }

    set top(value: number) {
        if (value >= this.bottom) {
            this.height = 0;
            this.y = value;
        } else {
            this.height = (this.bottom - value);
        }
    }

    /**
    * The location of the Rectangles top left corner as a Point object.
    * @name Phaser.Rectangle#topLeft
    * @property {Phaser.Point} topLeft - The location of the Rectangles top left corner as a Point object.
    */
    get topLeft(): Point {
        return new Point(this.x, this.y);
    }

    set topLeft(value: Point) {
        this.x = value.x;
        this.y = value.y;
    }

    /**
    * The location of the Rectangles top right corner as a Point object.
    * @name Phaser.Rectangle#topRight
    * @property {Phaser.Point} topRight - The location of the Rectangles top left corner as a Point object.
    */
    get topRight(): Point {
        return new Point(this.x + this.width, this.y);
    }

    set topRight(value: Point) {
        this.right = value.x;
        this.y = value.y;
    }

    /**
    * Determines whether or not this Rectangle object is empty. A Rectangle object is empty if its width or height is less than or equal to 0.
    * If set to true then all of the Rectangle properties are set to 0.
    * @name Phaser.Rectangle#empty
    * @property {boolean} empty - Gets or sets the Rectangles empty state.
    */
    get empty(): boolean {
        return (!this.width || !this.height);
    }

    set empty(value: boolean) {
        if (value === true) {
            this.setTo(0, 0, 0, 0);
        }
    }
    /**
    * Increases the size of the Rectangle object by the specified amounts. The center point of the Rectangle object stays the same, and its size increases to the left and right by the dx value, and to the top and the bottom by the dy value.
    * @method Phaser.Rectangle.inflate
    * @param {Phaser.Rectangle} a - The Rectangle object.
    * @param {number} dx - The amount to be added to the left side of the Rectangle.
    * @param {number} dy - The amount to be added to the bottom side of the Rectangle.
    * @return {Phaser.Rectangle} This Rectangle object.
    */
    static inflate(a: Rectangle, dx: number, dy: number): Rectangle {

        a.x -= dx;
        a.width += 2 * dx;
        a.y -= dy;
        a.height += 2 * dy;

        return a;

    }

    /**
    * Increases the size of the Rectangle object. This method is similar to the Rectangle.inflate() method except it takes a Point object as a parameter.
    * @method Phaser.Rectangle.inflatePoint
    * @param {Phaser.Rectangle} a - The Rectangle object.
    * @param {Phaser.Point} point - The x property of this Point object is used to increase the horizontal dimension of the Rectangle object. The y property is used to increase the vertical dimension of the Rectangle object.
    * @return {Phaser.Rectangle} The Rectangle object.
    */
    static inflatePoint(a: Rectangle, point: Point): Rectangle {

        return Rectangle.inflate(a, point.x, point.y);

    }

    /**
    * The size of the Rectangle object, expressed as a Point object with the values of the width and height properties.
    * @method Phaser.Rectangle.size
    * @param {Phaser.Rectangle} a - The Rectangle object.
    * @param {Phaser.Point} [output] - Optional Point object. If given the values will be set into the object, otherwise a brand new Point object will be created and returned.
    * @return {Phaser.Point} The size of the Rectangle object
    */
    static size(a: Rectangle, output?: Point): Point {

        if (output === undefined || output === null) return new Point(a.width, a.height);

        output.setTo(a.width, a.height);
        return output;

    }

    /**
    * Returns a new Rectangle object with the same values for the x, y, width, and height properties as the original Rectangle object.
    * @method Phaser.Rectangle.clone
    * @param {Phaser.Rectangle} a - The Rectangle object.
    * @param {Phaser.Rectangle} [output] - Optional Rectangle object. If given the values will be set into the object, otherwise a brand new Rectangle object will be created and returned.
    * @return {Phaser.Rectangle}
    */
    static clone(a: Rectangle, output?: Rectangle): Rectangle {

        if (output === undefined || output === null) return new Rectangle(a.x, a.y, a.width, a.height);

        output.setTo(a.x, a.y, a.width, a.height);
        return output;

    }

    /**
    * Returns a new Rectangle object with the same values for the left, top, width, and height properties as the original object.
    * @method Phaser.Rectangle.createFromBounds
    * @param {any} a - An object with `left`, `top`, `width`, and `height` properties.
    * @param {Phaser.Rectangle} [output] - Optional Rectangle object. If given the values will be set into the object, otherwise a brand new Rectangle object will be created and returned.
    * @return {Phaser.Rectangle}
    */
    static createFromBounds(a: Rectangle, output?: Rectangle): Rectangle {

        if (output === undefined || output === null) {
            output = new Rectangle(a.x, a.y, a.width, a.height);
        }

        return output.copyFromBounds(a);

    }

    /**
    * Determines whether the specified coordinates are contained within the region defined by this Rectangle object.
    * @method Phaser.Rectangle.contains
    * @param {Phaser.Rectangle} a - The Rectangle object.
    * @param {number} x - The x coordinate of the point to test.
    * @param {number} y - The y coordinate of the point to test.
    * @return {boolean} A value of true if the Rectangle object contains the specified point; otherwise false.
    */
    static contains(a: Rectangle, x: number, y: number) {

        if (a.width <= 0 || a.height <= 0) {
            return false;
        }

        return (x >= a.x && x < a.right && y >= a.y && y < a.bottom);

    }

    /**
    * Determines whether the specified coordinates are contained within the region defined by the given raw values.
    * @method Phaser.Rectangle.containsRaw
    * @param {number} rx - The x coordinate of the top left of the area.
    * @param {number} ry - The y coordinate of the top left of the area.
    * @param {number} rw - The width of the area.
    * @param {number} rh - The height of the area.
    * @param {number} x - The x coordinate of the point to test.
    * @param {number} y - The y coordinate of the point to test.
    * @return {boolean} A value of true if the Rectangle object contains the specified point; otherwise false.
    */
    static containsRaw(rx: number, ry: number, rw: number, rh: number, x: number, y: number): boolean {

        return (x >= rx && x < (rx + rw) && y >= ry && y < (ry + rh));

    }

    /**
    * Determines whether the specified point is contained within the rectangular region defined by this Rectangle object. This method is similar to the Rectangle.contains() method, except that it takes a Point object as a parameter.
    * @method Phaser.Rectangle.containsPoint
    * @param {Phaser.Rectangle} a - The Rectangle object.
    * @param {Phaser.Point} point - The point object being checked. Can be Point or any object with .x and .y values.
    * @return {boolean} A value of true if the Rectangle object contains the specified point; otherwise false.
    */
    static containsPoint(a: Rectangle, point: Point): boolean {

        return Rectangle.contains(a, point.x, point.y);

    }

    /**
    * Determines whether the first Rectangle object is fully contained within the second Rectangle object.
    * A Rectangle object is said to contain another if the second Rectangle object falls entirely within the boundaries of the first.
    * @method Phaser.Rectangle.containsRect
    * @param {Phaser.Rectangle} a - The first Rectangle object.
    * @param {Phaser.Rectangle} b - The second Rectangle object.
    * @return {boolean} A value of true if the Rectangle object contains the specified point; otherwise false.
    */
    static containsRect(a: Rectangle, b: Rectangle): boolean {

        //  If the given rect has a larger volume than this one then it can never contain it
        if (a.volume > b.volume) {
            return false;
        }

        return (a.x >= b.x && a.y >= b.y && a.right < b.right && a.bottom < b.bottom);

    }

    /**
    * Determines whether the two Rectangles are equal.
    * This method compares the x, y, width and height properties of each Rectangle.
    * @method Phaser.Rectangle.equals
    * @param {Phaser.Rectangle} a - The first Rectangle object.
    * @param {Phaser.Rectangle} b - The second Rectangle object.
    * @return {boolean} A value of true if the two Rectangles have exactly the same values for the x, y, width and height properties; otherwise false.
    */
    static equals(a: Rectangle, b: Rectangle): boolean {

        return (a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height);

    }

    /**
    * Determines if the two objects (either Rectangles or Rectangle-like) have the same width and height values under strict equality.
    * @method Phaser.Rectangle.sameDimensions
    * @param {Rectangle-like} a - The first Rectangle object.
    * @param {Rectangle-like} b - The second Rectangle object.
    * @return {boolean} True if the object have equivalent values for the width and height properties.
    */
    static sameDimensions(a: Rectangle, b: Rectangle): boolean {

        return (a.width === b.width && a.height === b.height);

    }

    /**
    * If the Rectangle object specified in the toIntersect parameter intersects with this Rectangle object, returns the area of intersection as a Rectangle object. If the Rectangles do not intersect, this method returns an empty Rectangle object with its properties set to 0.
    * @method Phaser.Rectangle.intersection
    * @param {Phaser.Rectangle} a - The first Rectangle object.
    * @param {Phaser.Rectangle} b - The second Rectangle object.
    * @param {Phaser.Rectangle} [output] - Optional Rectangle object. If given the intersection values will be set into this object, otherwise a brand new Rectangle object will be created and returned.
    * @return {Phaser.Rectangle} A Rectangle object that equals the area of intersection. If the Rectangles do not intersect, this method returns an empty Rectangle object; that is, a Rectangle with its x, y, width, and height properties set to 0.
    */
    static intersection(a: Rectangle, b: Rectangle, output: Rectangle = new Rectangle()): Rectangle {

        if (Rectangle.intersects(a, b)) {
            output.x = Math.max(a.x, b.x);
            output.y = Math.max(a.y, b.y);
            output.width = Math.min(a.right, b.right) - output.x;
            output.height = Math.min(a.bottom, b.bottom) - output.y;
        }

        return output;

    }

    /**
    * Determines whether the two Rectangles intersect with each other.
    * This method checks the x, y, width, and height properties of the Rectangles.
    * @method Phaser.Rectangle.intersects
    * @param {Phaser.Rectangle} a - The first Rectangle object.
    * @param {Phaser.Rectangle} b - The second Rectangle object.
    * @return {boolean} A value of true if the specified object intersects with this Rectangle object; otherwise false.
    */
    static intersects = function (a: Rectangle, b: Rectangle): boolean {

        if (a.width <= 0 || a.height <= 0 || b.width <= 0 || b.height <= 0) {
            return false;
        }

        return !(a.right < b.x || a.bottom < b.y || a.x > b.right || a.y > b.bottom);

    };

    /**
    * Determines whether the object specified intersects (overlaps) with the given values.
    * @method Phaser.Rectangle.intersectsRaw
    * @param {number} left - The x coordinate of the left of the area.
    * @param {number} right - The right coordinate of the area.
    * @param {number} top - The y coordinate of the area.
    * @param {number} bottom - The bottom coordinate of the area.
    * @param {number} tolerance - A tolerance value to allow for an intersection test with padding, default to 0
    * @return {boolean} A value of true if the specified object intersects with the Rectangle; otherwise false.
    */
    static intersectsRaw(a: Rectangle, left: number, right: number, top: number, bottom: number, tolerance: number = 0) {

        return !(left > a.right + tolerance || right < a.left - tolerance || top > a.bottom + tolerance || bottom < a.top - tolerance);

    }

    /**
    * Adds two Rectangles together to create a new Rectangle object, by filling in the horizontal and vertical space between the two Rectangles.
    * @method Phaser.Rectangle.union
    * @param {Phaser.Rectangle} a - The first Rectangle object.
    * @param {Phaser.Rectangle} b - The second Rectangle object.
    * @param {Phaser.Rectangle} [output] - Optional Rectangle object. If given the new values will be set into this object, otherwise a brand new Rectangle object will be created and returned.
    * @return {Phaser.Rectangle} A Rectangle object that is the union of the two Rectangles.
    */
    static union(a: Rectangle, b: Rectangle, output: Rectangle = new Rectangle()): Rectangle {

        return output.setTo(Math.min(a.x, b.x), Math.min(a.y, b.y), Math.max(a.right, b.right) - Math.min(a.left, b.left), Math.max(a.bottom, b.bottom) - Math.min(a.top, b.top));

    }

    /**
    * Calculates the Axis Aligned Bounding Box (or aabb) from an array of points.
    *
    * @method Phaser.Rectangle.aabb
    * @param {Phaser.Point[]} points - The array of one or more points.
    * @param {Phaser.Rectangle} [out] - Optional Rectangle to store the value in, if not supplied a new Rectangle object will be created.
    * @return {Phaser.Rectangle} The new Rectangle object.
    */
    static aabb = function (points: Point[], out = new Rectangle()): Rectangle {

        let xMax = Number.NEGATIVE_INFINITY,
            xMin = Number.POSITIVE_INFINITY,
            yMax = Number.NEGATIVE_INFINITY,
            yMin = Number.POSITIVE_INFINITY;

        points.forEach(function (point) {
            if (point.x > xMax) {
                xMax = point.x;
            }
            if (point.x < xMin) {
                xMin = point.x;
            }

            if (point.y > yMax) {
                yMax = point.y;
            }
            if (point.y < yMin) {
                yMin = point.y;
            }
        });

        out.setTo(xMin, yMin, xMax - xMin, yMax - yMin);

        return out;
    };
}

export const EmptyRectangle = new Rectangle();